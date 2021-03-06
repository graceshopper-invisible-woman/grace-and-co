import React from 'react'
import {connect} from 'react-redux'
import {
  editQuantity,
  getOrder,
  removeItem,
  completeOrder,
  deleteCart
} from '../store/order'
import {
  editGuestQuantity,
  removeGuestItem,
  removeGuestCart,
  guestCheckout
} from '../store/guestCart'
import {Redirect} from 'react-router-dom'

class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      cart: {
        items: []
      },
      displayCheckout: false,
      displayOrderSuccess: false,
      email: ''
    }
    this.handleClickMinus = this.handleClickMinus.bind(this)
    this.handleClickPlus = this.handleClickPlus.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleCheckout = this.handleCheckout.bind(this)
    this.startCheckout = this.startCheckout.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    if (this.props.user.id) {
      // if user exists, grab cart from store
      await this.props.getOrder(this.props.user.id)
      console.log('in componentDidMount')
    } else if (localStorage.getItem('cart')) {
      // if cart exists in localstorage grab cart and set to local state
      const localCart = JSON.parse(localStorage.getItem('cart'))
      this.setState({
        cart: localCart
      })
    }
  }

  handleClickPlus(id, quantity, orderId) {
    quantity++
    const itemObj = {id, quantity, orderId}
    if (this.props.user.id) {
      this.props.editQuantity(itemObj)
    } else {
      const localCart = editGuestQuantity(id, quantity)
      this.setState({
        cart: localCart
      })
    }
  }

  handleClickMinus(id, quantity, orderId) {
    quantity--
    const itemObj = {id, quantity, orderId}
    if (this.props.user.id) {
      this.props.editQuantity(itemObj)
    } else {
      const localCart = editGuestQuantity(id, quantity)
      this.setState({
        cart: localCart
      })
    }
  }

  async handleRemove(itemId, productId) {
    if (this.props.user.id) {
      await this.props.removeItem(itemId)
    } else {
      const localCart = removeGuestItem(productId)
      this.setState({
        cart: localCart
      })
    }
  }

  handleCheckout(evt) {
    evt.preventDefault()

    const orderObj = {
      products: this.state.cart.items,
      email: this.state.email,
      subtotal: this.state.cart.subtotal
    }

    guestCheckout(orderObj)
    this.setState({
      cart: {
        items: []
      },
      email: '',
      displayOrderSuccess: true
    })
  }

  handleChange(evt) {
    this.setState({
      email: evt.target.value
    })
  }

  startCheckout() {
    if (this.props.userId) {
      this.props.completeOrder(this.props.userId)
      this.setState({
        displayOrderSuccess: true
      })
    }

    this.setState({
      displayCheckout: true
    })
  }
  render() {
    const {displayOrderSuccess} = this.state
    const cart = this.props.user.id ? this.props.order : this.state.cart
    return displayOrderSuccess ? (
      <Redirect to="/complete" />
    ) : (
      <div>
        {// (!this.props.userId && !this.state.cart.length) ? ( // cannot get this to work and also say cart is empty after loading ):
        //     <h1>Cart Loading...</h1>
        //   ) : (
        Object.keys(cart).length &&
          cart.items.map(item => (
            <div key={item.id}>
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{width: '150px'}}
                className="image left"
              />
              <h4>{item.name}</h4>
              <p>
                <b>Price:</b> ${item.orderItem.price} | <b>Quantity:</b>{' '}
                {item.orderItem.quantity}{' '}
                <button
                  onClick={() =>
                    this.handleClickPlus(
                      item.orderItem.id,
                      item.orderItem.quantity,
                      item.orderItem.orderId
                    )
                  }
                  type="submit"
                  className="button small"
                >
                  +
                </button>
                <button
                  onClick={() =>
                    this.handleClickMinus(
                      item.orderItem.id,
                      item.orderItem.quantity,
                      item.orderItem.orderId
                    )
                  }
                  type="submit"
                  className="button small"
                >
                  -
                </button>{' '}
                | <b>Sub-Total:</b> ${item.orderItem.price *
                  item.orderItem.quantity}
              </p>
              <button
                onClick={() => this.handleRemove(item.orderItem.id, item.id)}
                type="submit"
                className="button small"
              >
                Remove
              </button>
              <hr />
            </div>
          ))}

        {/* {cart.items.length ? (
          <div>
            Total: ${cart.subtotal}
            <button type="submit" onClick={() => this.startCheckout()}>
              Checkout
            </button>
          </div>
        ) : (
          <h1>Your Cart Is Empty</h1>
        )} */}

        {cart.items.length ? (
          <div>
            <p>
              <b>Cart Total:</b> ${cart.subtotal.toFixed(2)}
            </p>
            {/* ADDED DELETE CART BUTTON */}
            <button
              type="button"
              className="button small"
              onClick={() => {
                if (this.props.userId) this.props.deleteCart()
                else {
                  removeGuestCart()
                  this.setState({
                    cart: {
                      items: []
                    }
                  })
                }
              }}
            >
              Clear Cart
            </button>
            <button
              type="submit"
              className="button small"
              onClick={() => this.startCheckout()}
            >
              Checkout
            </button>
          </div>
        ) : (
          <h4>Your Cart Is Empty</h4>
        )}

        {this.state.displayCheckout &&
          !this.props.user.id && (
            <form onSubmit={this.handleCheckout}>
              <label htmlFor="email">
                Please enter your email before continuing to checkout:{' '}
              </label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />

              <button type="submit">Continue</button>
            </form>
          )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    order: state.order,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => ({
  removeItem: itemId => dispatch(removeItem(itemId)),
  getOrder: userId => dispatch(getOrder(userId)),
  editQuantity: quantity => dispatch(editQuantity(quantity)),
  completeOrder: userId => dispatch(completeOrder(userId)),
  deleteCart: () => dispatch(deleteCart())
})

export default connect(mapState, mapDispatch)(Cart)
