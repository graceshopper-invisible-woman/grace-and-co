import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  SingleProduct,
  LandingPage,
  AllProduct,
  Cart,
  OrderProcessed,
  AdminAllUser,
  AdminAllProduct
} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    const {loadInitialData} = this.props
    loadInitialData()
  }

  render() {
    const {isLoggedIn, user, isAdmin} = this.props
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route
          exact
          path="/"
          render={() => <LandingPage isLoggedIn={isLoggedIn} />}
        />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/products" component={AllProduct} />
        <Route exact path="/complete" component={OrderProcessed} />
        <Route exact path="/cart" component={() => <Cart user={user} />} />

        {isAdmin ? (
          <Switch>
            {/* Routes placed here are only available to admins */}
            <Route
              exact
              path="/"
              render={() => <LandingPage isLoggedIn={isLoggedIn} />}
            />
            <Route exact path="/admin/products" component={AdminAllProduct} />
            <Route exact path="/admin/users" component={AdminAllUser} />
          </Switch>
        ) : isLoggedIn ? (
          <Switch>
            <Route
              path="/"
              render={() => <LandingPage isLoggedIn={isLoggedIn} />}
            />
          </Switch>
        ) : (
          ''
        )}

        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    user: state.user,
    isAdmin: !!state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired
}
