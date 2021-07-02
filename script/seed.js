const {green, red} = require('chalk')
const db = require('../server/db')
const {Product, User, Order, OrderItem} = require('../server/db/models')
const faker = require('faker')

const seed = async () => {
  try {
    await db.sync({force: true})
    console.log('db synced!')

    //product seeding
    const products = [
      {
        name: 'Pink Citron Peacock Diagonal Stripe On Triangle Earring',
        description:
          'Part of our signature seed bead collection, these amazing fringe earrings offer a unique look as they hang from a brass triangle at the top. They are handcrafted by artisans in India and are sure to add an effortlessly cool edge to any modern boho look.',
        category: 'Beaded',
        imageUrl: '/img/Beaded_1.jpg',
        price: 30.0,
        inventory: 0
      },
      {
        name: 'Peacock Rust Citron Fringe Earring',
        description:
          'Part of our signature seed bead collection, these amazing fringe earrings offer a unique look as they hang from a brass triangle at the top. They are handcrafted by artisans in India and are sure to add an effortlessly cool edge to any modern boho look.',
        category: 'Beaded',
        imageUrl: '/img/Beaded_2.jpg',
        price: 30.0,
        inventory: 25
      },
      {
        name: 'Gold Petite Luxe Earring',
        description:
          'Part of our luxe collection accessories, the luxe petite fringe earring is hand crafted by artisans in India. Delicate glass beads with an elegant shimmer are woven for a luminous, lightweight and effortlessy cool beaded statement accessory - a must for those who love their everyday delicates with a touch of evening elegance.',
        category: 'Beaded',
        imageUrl: '/img/Beaded_3.jpg',
        price: 30.0,
        inventory: 25
      },
      {
        name: 'Confetti Small Hoop Earring',
        description: `A smaller take on our signature seed bead hoop earrings, the gold small hoop seed bead earring is a style that's sure to make a simple statement. The lightweight silhouette ensures easy wear, day or night. Crafted in India by skilled artisans, these glass seed bead earrings are sure to make you look effortlessly cool.`,
        category: 'Beaded',
        imageUrl: '/img/Beaded_4.jpg',
        price: 25.0,
        inventory: 50
      },
      {
        name: 'Muted Confetti Button Post Beaded Earring',
        description: `The seed bead button post earring is a style that's perfect for any occasion. Part of our seed bead collection crafted by skilled artisans in India, the simple statement accessory adds a pop of color to any outfit. Channel your inner boho with this simple and effortlessly cool statement accessory.`,
        category: 'Beaded',
        imageUrl: '/img/Beaded_5.jpg',
        price: 20.0,
        inventory: 100
      },
      {
        name: 'Scarlet & Magenta Luxe Diamond Earring',
        description: `Part of our luxe collection the scarlet and magenta diamond earring is hand crafted by artisans in India. Delicate glass beads with an elegant shimmer are woven for an effortlessly cool beaded statement accessory - a must for those who love their everyday delicates with a touch of evening elegance.`,
        category: 'Beaded',
        imageUrl: '/img/Beaded_6.jpg',
        price: 35.0,
        inventory: 25
      },
      {
        name: 'Ivory Fringe Beaded Earring',
        description: `Effortlessly cool earrings are a must have in everyone’s wardrobe. Part of our petite seed bead collection, the petite fringe seed bead earrings are a one-and-done stunner. Throw these on with your favorite tee and jeans and you're ready for whatever the day brings. Crafted in India by skilled artisans.`,
        category: 'Beaded',
        imageUrl: '/img/Beaded_7.jpg',
        price: 20.0,
        inventory: 100
      },
      {
        name: 'Port And Gold Button Post Earring',
        description: `The seed bead button post earring is a style that's perfect for any occasion. Part of our seed bead collection crafted by skilled artisans in India, the simple statement accessory is a perfect combo of girly and tomboy. Channel your inner boho with this simple and effortlessly cool statement accessory.`,
        category: 'Beaded',
        imageUrl: '/img/Beaded_8.jpg',
        price: 20.0,
        inventory: 100
      },
      {
        name: 'White And Gold Button Post Beaded Earring',
        description: `The seed bead button post earring is a style that's perfect for any occasion. Part of our seed bead collection crafted by skilled artisans in India, the simple statement accessory is a perfect combo of girly and tomboy. Channel your inner boho with this simple and effortlessly cool statement accessory.`,
        category: 'Beaded',
        imageUrl: '/img/Beaded_9.jpg',
        price: 20.0,
        inventory: 100
      },
      {
        name: 'Hot Pink With Coral Small Hoop Seed Bead Earring',
        description: `A smaller take on our signature seed bead hoop earrings, the color block small hoop seed bead earring is a style that's sure to make a simple statement. The lightweight silhouette ensures easy wear, day or night. Crafted in India by skilled artisans, these glass seed bead earrings are sure to make you look effortlessly cool.`,
        category: 'Beaded',
        imageUrl: '/img/Beaded_10.jpg',
        price: 25.0,
        inventory: 75
      },
      {
        name: 'Black And Brass Ceramic Spike Earring',
        description: `The brass ceramic spike earring is a sleek accessory with modern flair that exceeds any expectations of a standard dangle earring. The ceramic elongated accent adds a unique aspect to this statement earring. Our signature ceramic collection is crafted in India by skilled artisans.`,
        category: 'Brass',
        imageUrl: '/img/Brass_1.jpg',
        price: 45.0,
        inventory: 25
      },
      {
        name: 'Terra Cotta And Brass Ceramic Pendulum Earring',
        description: `With a distinctive silhouette, the brass ceramic pendulum earring is an impactful accessory with modern flair that far exceeds the expectation of a standard dangle post. The ceramic accent adds a unique aspect to this statement earring. Our signature ceramic collection is crafted in India by skilled artisans.`,
        category: 'Brass',
        imageUrl: '/img/Brass_2.jpg',
        price: 40.0,
        inventory: 25
      },
      {
        name: 'Black And Brass Ceramic Half Circle Post Earring',
        description: `Our signature ceramic collection is crafted in India by skilled artisans. The brass and ceramic half circle post earring is a modern and bold statement accessory. This trendy sculptural shape transitions effortlessly from the office to evening.`,
        category: 'Brass',
        imageUrl: '/img/Brass_3.jpg',
        price: 35.0,
        inventory: 50
      },
      {
        name: 'Terra Cotta And Brass Ceramic Half Circle Post Earring',
        description: `Our signature ceramic collection is crafted in India by skilled artisans. The brass and ceramic half circle post earring is a modern and bold statement accessory. This trendy sculptural shape transitions effortlessly from the office to evening.`,
        category: 'Brass',
        imageUrl: '/img/Brass_4.jpg',
        price: 35.0,
        inventory: 50
      },
      {
        name: 'Black And Brass Ceramic Hoop Earring',
        description: `Our signature ceramic collection is crafted in India by skilled artisans. The brass and ceramic half circle post earring is a modern and bold statement accessory. This trendy sculptural shape transitions effortlessly from the office to evening.`,
        category: 'Brass',
        imageUrl: '/img/Brass_5.jpg',
        price: 35.0,
        inventory: 50
      },
      {
        name: 'Brass Small Star Earrings',
        description: `Our small star brass post earrings make a bold statement. Part of our brass collection, these earrings add shine to any outfit. Our brass collection is crafted in India by skilled artisans and molded into modern statement pieces.`,
        category: 'Brass',
        imageUrl: '/img/Brass_6.jpg',
        price: 30.0,
        inventory: 50
      },
      {
        name: 'Small Heart Post Brass Earring',
        description: `Looking for a cute, simple everyday pair of earrings? Look no further than the small heart post earrings. Part of our signature brass collection that is crafted in India, these earrings are effortlessly cool in any setting.`,
        category: 'Brass',
        imageUrl: '/img/Brass_7.jpg',
        price: 30.0,
        inventory: 50
      },
      {
        name: 'Matte Brass Rainbow Earring',
        description: `Part of our brass collection, these earrings are made by artisans in India from uncycled brass. Inspired by nature and its rainbows, the rainbow dangle earring features a unique sillouhette that adds an effortlessly cool statement to any outfit.`,
        category: 'Brass',
        imageUrl: '/img/Brass_8.jpg',
        price: 55.0,
        inventory: 15
      },
      {
        name: 'Cobalt Burst Brass Earring',
        description: `Part of our brass collection, these earrings are made by artisans in India from upcycled brass. By incorporating both sides of the earring, they feature a unique sillouhette that adds an effortlessly cool statement to any outfit.`,
        category: 'Brass',
        imageUrl: '/img/Brass_9.jpg',
        price: 45.0,
        inventory: 25
      },
      {
        name: 'Palm Leaf Drop Brass Earring',
        description: `Taking a cue from nature, the brass palm leaf earrings are a must for those who love a statement accessory and can't get enough of nature-inspired pieces. Our brass collection is crafted in India by skilled artisans and molded into modern statement pieces that add boldness to any outfit.`,
        category: 'Brass',
        imageUrl: '/img/Brass_10.jpg',
        price: 60.0,
        inventory: 15
      },
      {
        name: 'Chartreuse Hoop Lucite Earring',
        description: `Ready to elevate everything? Crafted in India by skilled artisans, our lucite collection is molded into modern geometric shapes. The lightweight lucite hoop earrings will add flare to any outfit. These of-the-moment extras are perfect for the office or everyday.`,
        category: 'Lucite + Resin',
        imageUrl: '/img/LR_1.jpg',
        price: 20.0,
        inventory: 50
      },
      {
        name: 'Chartreuse Clear Rectangle Half-Round Lucite Earring',
        description: `Our lucite rectangle with double half-round earrings feature bold shapes that dangle from a brass hoop. Crafted in India by skilled artisans and molded into modern geometric statement accessories, these statement earrings are the perfect addition to your modern boho wardrobe.`,
        category: 'Lucite + Resin',
        imageUrl: '/img/LR_2.jpg',
        price: 20.0,
        inventory: 50
      },
      {
        name: 'Watermelon Clear Double Half Round Lucite Earring',
        description: `Our lucite collection is crafted in India by skilled artisans and molded into modern geometric statement accessories. The lucite double half-round earrings add a dose of modern flair to your effortlessly cool wardrobe. The bold shapes make a statement for every day and any occasion.`,
        category: 'Lucite + Resin',
        imageUrl: '/img/LR_3.jpg',
        price: 20.0,
        inventory: 50
      },
      {
        name: 'Clear Double Half Round Lucite Earring',
        description: `Our lucite collection is crafted in India by skilled artisans and molded into modern geometric statement accessories. The lucite double half-round earrings add a dose of modern flair to your effortlessly cool wardrobe. The bold shapes make a statement for every day and any occasion.`,
        category: 'Lucite + Resin',
        imageUrl: '/img/LR_4.jpg',
        price: 20.0,
        inventory: 50
      },
      {
        name: 'Turquoise Clear Rectangle Half-Round Lucite Earring',
        description: `Our lucite rectangle with double half-round earrings feature bold shapes that dangle from a brass hoop. Crafted in India by skilled artisans and molded into modern geometric statement accessories, these statement earrings are the perfect addition to your modern boho wardrobe.`,
        category: 'Lucite + Resin',
        imageUrl: '/img/LR_5.jpg',
        price: 20.0,
        inventory: 50
      },
      {
        name: 'White Wood Hoop Earring',
        description: `Part of our wood collection, these earrings feature materials sourced from India and the Philippines and are all handcrafted in our Atlanta studio. They make for a simple yet chic boho addition to any look.`,
        category: 'Wood',
        imageUrl: '/img/Wood_1.jpg',
        price: 35.0,
        inventory: 40
      },
      {
        name: 'White Ball On Stick Earring',
        description: `Part of our wood collection, these earrings feature materials sourced from India and the Philippines and are all handcrafted in our Atlanta studio. They make for a simple yet chic boho addition to any look.`,
        category: 'Wood',
        imageUrl: '/img/Wood_2.jpg',
        price: 35.0,
        inventory: 40
      },
      {
        name: 'Drop White Wood And Brass Earring',
        description: `Part of our wood collection, these earrings feature materials sourced from India and the Philippines and are all handcrafted in our Atlanta studio. They make for a simple yet chic boho addition to any look.`,
        category: 'Wood',
        imageUrl: '/img/Wood_3.jpg',
        price: 35.0,
        inventory: 0
      },
      {
        name: 'White Hoop Wood And Resin Earring',
        description: `Our wood + resin collection is equal parts simple and bold. The wood and resin hoops combine wood and resin to create a unique and inspired look. Crafted in India by skilled artisans.`,
        category: 'Wood',
        imageUrl: '/img/Wood_4.jpg',
        price: 35.0,
        inventory: 0
      },
      {
        name: 'Red Hoop Wood And Resin Earring',
        description: `Our wood + resin collection is equal parts simple and bold. The wood and resin hoops combine wood and resin to create a unique and inspired look. Crafted in India by skilled artisans.`,
        category: 'Wood',
        imageUrl: '/img/Wood_5.jpg',
        price: 35.0,
        inventory: 40
      },
      {
        name: 'Red Post Wood And Resin Earring',
        description: `Our wood + resin collection is a must for those who love their everyday delicates with a touch of bold artistry. The wood and resin circle post features a molded resin half combined with a wooden semicircle. Wear to add modern flair to any outfit. Crafted by skilled artisans in India.`,
        category: 'Wood',
        imageUrl: '/img/Wood_6.jpg',
        price: 35.0,
        inventory: 40
      },
      {
        name: 'Champagne Leather Circles Earring',
        description: `Lightweight, simple yet bold, the leather circles earring is a modern accessory, easy to wear with any outfit. These one-and-done stunners are perfect alone or with your other INK + ALLOY favorites. Crafted in Atlanta by skilled artisans.`,
        category: 'Leather',
        imageUrl: '/img/Leather_1.jpg',
        price: 40.0,
        inventory: 25
      },
      {
        name: 'Champagne Leather Hoop Earring',
        description: `Elevate your look by adding style to any outfit with the unique silhouette of the double diamond leather earring. Part of the leather collection, these effortlessly cool statement earrings are handcrafted in Atlanta, Georgia by skilled artisans.`,
        category: 'Leather',
        imageUrl: '/img/Leather_2.jpg',
        price: 40.0,
        inventory: 25
      },
      {
        name: 'Black Camel Geo Dangle Leather Earring',
        description: `Elevate your look by adding style to any outfit with the geo dangle leather earrings. Our leather collection is crafted in Atlanta, Georgia by skilled artisans and designed to be modern statement pieces.`,
        category: 'Leather',
        imageUrl: '/img/Leather_3.jpg',
        price: 40.0,
        inventory: 25
      },
      {
        name: 'Indigo Small Circle With Blush Half Circles Leather Earring',
        description: `Elevate your look by adding style to any outfit with the small half-circles leather earrings. Our leather collection is crafted in Atlanta, Georgia by skilled artisans and designed to be modern statement pieces.`,
        category: 'Leather',
        imageUrl: '/img/Leather_4.jpg',
        price: 40.0,
        inventory: 25
      },
      {
        name: 'Black Circle With Brass Leather Earring',
        description: `Lightweight, simple yet bold, the leather circle with brass post earring is a modern accessory, easy to wear with any outfit. Crafted in Atlanta by skilled artisans.`,
        category: 'Leather',
        imageUrl: '/img/Leather_5.jpg',
        price: 40.0,
        inventory: 25
      },
      {
        name: 'Oyster And Rose Gold Diamond Leather Earring',
        description: `Elevate your look by adding style to any outfit with the unique sillouhette of the double diamond leather earring. Part of the leather collection, these effortlessly cool statement earrings are handcrafted in Atlanta, Georgia by skilled artisans.`,
        category: 'Leather',
        imageUrl: '/img/Leather_6.jpg',
        price: 38.0,
        inventory: 25
      },
      {
        name: 'Mini Huggie Hoops',
        description: `Lightweight and easy to accessorize, these mini huggie hoops crafted in 100% recycled Sterling Silver and dipped in 14k gold are perfect to wear every single day. Minimal, lightweight, and versatile, these sterling silver huggies are your everyday earrings that you will never want to take off.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_1.jpg',
        price: 59.0,
        inventory: 15
      },
      {
        name: 'Celeste',
        description: `Shine brighter than the starry desert sky with these mismatched moon and star celestial huggie hoops featuring sparkling cubic zirconia gems. Dipped in 14k gold and adorned with sparkling gems, these mismatched earrings create a fabulous celestial theme. Feel amazing as you wear the moon and stars hanging from your ears with these stylish gold huggie hoops.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_2.jpg',
        price: 75.0,
        inventory: 15
      },
      {
        name: 'Suzanne',
        description: `Be the first to try on these stylish gold huggie hoop earrings made of sustainable Sterling Silver and covered with sparkling gemstones in a sleek pavé setting. Handcrafted in tarnish-resistant and 100% recycled sterling silver, these mini hoops are topped with a 14k gold layer. Hurry up and get these gold huggie hoops before it’s too late.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_3.jpg',
        price: 59.0,
        inventory: 15
      },
      {
        name: 'Scarlett',
        description: `These modern and sleek gold hoop earrings will give you the perfect double-stack look with just one piercing. Carefully handcrafted and dipped in 14k gold, these double hoop earrings are great for both a regular office day and a rock concert.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_4.jpg',
        price: 49.0,
        inventory: 25
      },
      {
        name: 'Frida',
        description: `Hear the buzzing sound? That’s your ear lobes begging you to get these extra-stylish gold huggie hoops with a natural pearl charm. With a lustrous freshwater pearl charm and a luscious gold texture, these gold huggie hoop earrings are guaranteed to become your next jewelry obsession. Due to the unique nature of freshwater pearls, exact colors and shapes may vary slightly from the picture shown.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_5.jpg',
        price: 49.0,
        inventory: 25
      },
      {
        name: 'Cassie',
        description: `Add some dainty style to your ears with our delicate tiny hoop earrings featuring a cubic zirconia! Handcrafted in 100% recycled Sterling Silver and dipped in 14k gold, these charming huggie hoops feature sparkling cubic zirconia gems. Step up on the glamour scale with these chic open hoops.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_6.jpg',
        price: 49.0,
        inventory: 25
      },
      {
        name: 'Elise',
        description: `A perfect blend between huggie and teardrop designs, these delicate huggie hoops with sparkling cubic zirconia gems will add a hint of subtle elegance to your look. Perfect for any face shape, these gold-dipped huggie hoops are lightweight, versatile, and contemporary. Make sure not to miss out on these unique gold huggies.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_7.jpg',
        price: 49.0,
        inventory: 25
      },
      {
        name: 'Elios',
        description: `Shine brighter than the sun with these classy gold huggie hoops made of recycled Sterling Silver. Inspired by the fiery color play of the sun, these gold-plated huggie hoops feature a cubic zirconia gemstone that sparkles beautifully in the light. These huggie hoops are crafted in 100% recycled sterling silver and dipped in a thick gold layer that gives them a luxurious texture.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_8.jpg',
        price: 59.0,
        inventory: 20
      },
      {
        name: 'Mini Abby',
        description: `The smaller version of our Abby hoop earrings, this pair of spherical earrings have your ear looking great from front to back. 14k gold plated and super durable, these earrings are an amazing everyday staple that are an updated and unique take on a small gold hoop.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_9.jpg',
        price: 49.0,
        inventory: 30
      },
      {
        name: 'Oshi',
        description: `Light and delicate, these gold star hoop earrings with a celestial-inspired design and shimmering cubic zirconia are the perfect addition to your earring stack. These gorgeous star hoop earrings dipped in 14k gold are meant to be worn every single day. Pair or mix-and-match them with our lightning bolt earrings for a full celestial statement.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_10.jpg',
        price: 59.0,
        inventory: 20
      },
      {
        name: 'Cruz',
        description: `Recently featured on VOGUE, these sleek gold huggie hoops are made of recycled sterling silver and will quickly become your favorite good luck earrings. Inspired by the mystic designs of talisman jewelry, these gold huggies hoops feature a gorgeous charm with a center sparkling cubic zirconia gem. Try them on and watch your style get a fresh upgrade.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_11.jpg',
        price: 85.0,
        inventory: 10
      },
      {
        name: 'Riviera',
        description: `Get your hands on these gold moonstone charms huggie hoops for a celestial look. Wear these moonstone huggie hoops and let the inner glow of the moonstone set in gold make you feel mysterious & elegant.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_12.jpg',
        price: 75.0,
        inventory: 15
      },
      {
        name: 'Ashley',
        description: `Featuring lustrous Swarovski pearls in a pavé setting, these elegant pearl huggie hoops are this season’s must-have. Carefully crafted in 100% recycled Sterling Silver and dipped in 14k gold, these pearl huggie hoops will add a dainty vibe to any outfit. Add a modern twist to a classic pearl look by stacking these pearl huggies with our pave huggie hoops.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_13.jpg',
        price: 75.0,
        inventory: 15
      },
      {
        name: 'Opalite Solitaire Double Huggies',
        description: `A solitaire opalite stone by two gleaming hoops that hug your ear to look as if you are wearing multiple earrings.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_14.jpg',
        price: 45.0,
        inventory: 35
      },
      {
        name: 'Nico Huggies',
        description: `Introducing the Nico Huggies, an 18k gold plated huggie that isn't afraid to make a statement. Make your everyday style effortlessly daring.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_15.jpg',
        price: 45.0,
        inventory: 35
      },
      {
        name: 'Wilder Huggies',
        description: `Suit up. These tough chainlinks feel like golden armor.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_16.jpg',
        price: 45.0,
        inventory: 35
      },
      {
        name: 'Parker Huggies',
        description: `With a high-shine finish, these elongated, retro huggies are the summer earrings you will put on and never want to take off.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_17.jpg',
        price: 50.0,
        inventory: 30
      },
      {
        name: 'Shimmer Huggies',
        description: `Dainty huggies lined with gleaming cubic zirconia make for the perfect earring to wear all day.`,
        category: 'Huggies + Ear Cuffs',
        imageUrl: '/img/Huggies_18.jpg',
        price: 45.0,
        inventory: 35
      },
      {
        name: 'Boa',
        description: `For those who are not afraid of cute snakes, consider the gold Boa Stud Earrings an add to cart moment. Give in to the temptation of adding these gold snake stud earrings to your jewelry collection and feel the power of great styling.`,
        category: 'Stud',
        imageUrl: '/img/Stud_1.jpg',
        price: 49.0,
        inventory: 30
      },
      {
        name: 'Mini Love Knot',
        description: `Add these gorgeous knot stud earrings to your shopping cart and score bonus styling points. Artistically handcrafted in sterling silver with a thick 14k gold layer, these gold studs are simply fabulous. Whether you want to tie up your knot or not, you need these knot stud earrings in your jewelry collection. Get them now and add an edgy vibe to your daily look.`,
        category: 'Stud',
        imageUrl: '/img/Stud_2.jpg',
        price: 75.0,
        inventory: 15
      },
      {
        name: 'Mini Disco',
        description: `Minimal, chic and cute, these gold stud earrings are essential jewelry pieces. They say great fragrances come in small bottles and we couldn’t agree more. These sleek gold studs are very stylish and they add a playful vibe to your outfit. Wear these cute gold stud earrings mismatched to get a creative look or style them with a layered gold necklace and a cocktail ring to achieve a beautiful statement outfit.`,
        category: 'Stud',
        imageUrl: '/img/Stud_3.jpg',
        price: 49.0,
        inventory: 40
      },
      {
        name: 'Claire',
        description: `These tiny ball hoop earrings are the living proof that less can be more! Versatile, lightweight and chic, these reversed huggie hoops are crafted in 100% recycled Sterling Silver and dipped in luscious 14k gold. Get these fabulous reversed hoops before they are out of stock.`,
        category: 'Stud',
        imageUrl: '/img/Stud_4.jpg',
        price: 49.0,
        inventory: 40
      },
      {
        name: 'Joanne',
        description: `These freshwater pearl stud earrings have a dainty twist: a delicate chain that hangs just below your lobe for a little extra shimmer. With a contemporary flexible hoop design, a comfortable ear post & backing style, luscious natural pearls, these pearl earrings will instantly upgrade your look. Pair these pearl chain stud earrings with a matching pearl pendant for extra style points.`,
        category: 'Stud',
        imageUrl: '/img/Stud_5.jpg',
        price: 59.0,
        inventory: 30
      },
      {
        name: 'Mini Organic Pearl',
        description: `Handcrafted with love, a thick 18K gold layer on Sterling Silver, meet your everyday freshwater pearl stud earrings - now available in mini. Chic, delicate and with a beautiful luster, these organic pearl studs will get you addicted to pearl jewelry. These 18k gold studs feature high-grade freshwater pearls. Get these gorgeous pearl stud earrings for your casual yet elegant look.`,
        category: 'Stud',
        imageUrl: '/img/Stud_6.jpg',
        price: 59.0,
        inventory: 30
      },
      {
        name: 'Lisboa',
        description: `Meet the gold studs that you’ll never want to take off – these twisted stud earrings are our latest jewelry obsession. These twisted stud earrings dipped in 14k gold are must-have jewelry pieces. Refresh your jewelry style and be the first to try on these contemporary gold studs.`,
        category: 'Stud',
        imageUrl: '/img/Stud_7.jpg',
        price: 49.0,
        inventory: 40
      },
      {
        name: 'Rain',
        description: `These gold droplet studs are the perfect update for your everyday earring rotation. Lightweight and dipped in 14k gold, these stud earrings are meant for stacking, or can be worn on their own as a delicate addition to your look. Make sure to get these droplet studs before they are gone!`,
        category: 'Stud',
        imageUrl: '/img/Stud_8.jpg',
        price: 39.0,
        inventory: 50
      },
      {
        name: 'Diamond Mini Studs',
        description: `Our diamonds are ethically sourced from suppliers who follow conflict-free and socially responsible practices. Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day, everywhere.`,
        category: 'Stud',
        imageUrl: '/img/Stud_9.jpg',
        price: 240.0,
        inventory: 5
      },
      {
        name: 'Square Diamond Studs',
        description: `Our diamonds are ethically sourced from suppliers who follow conflict-free and socially responsible practices. Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day, everywhere.`,
        category: 'Stud',
        imageUrl: '/img/Stud_10.jpg',
        price: 650.0,
        inventory: 5
      },
      {
        name: 'Round Diamond Studs',
        description: `Our diamonds are ethically sourced from suppliers who follow conflict-free and socially responsible practices. Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day, everywhere.`,
        category: 'Stud',
        imageUrl: '/img/Stud_11.jpg',
        price: 525.0,
        inventory: 5
      },
      {
        name: 'Flower Studs',
        description: `Our diamonds are ethically sourced from suppliers who follow conflict-free and socially responsible practices. Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day, everywhere.`,
        category: 'Stud',
        imageUrl: '/img/Stud_12.jpg',
        price: 425.0,
        inventory: 5
      },
      {
        name: 'Baguette Diamond Studs',
        description: `Our diamonds are ethically sourced from suppliers who follow conflict-free and socially responsible practices. Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day, everywhere.`,
        category: 'Stud',
        imageUrl: '/img/Stud_13.jpg',
        price: 340.0,
        inventory: 5
      },
      {
        name: 'Large Diamond Studs',
        description: `Our diamonds are ethically sourced from suppliers who follow conflict-free and socially responsible practices. Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day, everywhere.`,
        category: 'Stud',
        imageUrl: '/img/Stud_14.jpg',
        price: 1400.0,
        inventory: 3
      },
      {
        name: 'Pavé Diamond Round Studs',
        description: `Our diamonds are ethically sourced from suppliers who follow conflict-free and socially responsible practices. Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day, everywhere.`,
        category: 'Stud',
        imageUrl: '/img/Stud_15.jpg',
        price: 325.0,
        inventory: 5
      },
      {
        name: 'Diamond Station Studs',
        description: `Our diamonds are ethically sourced from suppliers who follow conflict-free and socially responsible practices. Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day, everywhere.`,
        category: 'Stud',
        imageUrl: '/img/Stud_16.jpg',
        price: 285.0,
        inventory: 10
      },
      {
        name: 'Diamonds Bar Studs',
        description: `Our diamonds are ethically sourced from suppliers who follow conflict-free and socially responsible practices. Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day, everywhere.`,
        category: 'Stud',
        imageUrl: '/img/Stud_17.jpg',
        price: 250.0,
        inventory: 10
      },
      {
        name: 'White Sapphire Duo Studs',
        description: `Our diamonds are ethically sourced from suppliers who follow conflict-free and socially responsible practices. Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day, everywhere.`,
        category: 'Stud',
        imageUrl: '/img/Stud_18.jpg',
        price: 180.0,
        inventory: 15
      },
      {
        name: 'Mini Lotus Studs',
        description: `All of our gemstones are genuine mineral stones that are highly valued for their beauty, longevity and rarity. We use an array of natural, AAA grade gemstones.`,
        category: 'Stud',
        imageUrl: '/img/Stud_19.jpg',
        price: 110.0,
        inventory: 10
      },
      {
        name: 'Sphere Studs',
        description: `Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day, everywhere.`,
        category: 'Stud',
        imageUrl: '/img/Stud_20.jpg',
        price: 50.0,
        inventory: 25
      },
      {
        name: 'Bold Sphere Studs',
        description: `Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day, everywhere.`,
        category: 'Stud',
        imageUrl: '/img/Stud_21.jpg',
        price: 65.0,
        inventory: 25
      },
      {
        name: 'Bar Studs',
        description: `Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day, everywhere.`,
        category: 'Stud',
        imageUrl: '/img/Stud_22.jpg',
        price: 95.0,
        inventory: 30
      },
      {
        name: 'Thumbtack Studs',
        description: `Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day, everywhere.`,
        category: 'Stud',
        imageUrl: '/img/Stud_23.jpg',
        price: 80.0,
        inventory: 35
      },
      {
        name: 'Moon Studs',
        description: `Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day, everywhere.`,
        category: 'Stud',
        imageUrl: '/img/Stud_24.jpg',
        price: 80.0,
        inventory: 35
      },
      {
        name: 'Star Studs',
        description: `Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day, everywhere.`,
        category: 'Stud',
        imageUrl: '/img/Stud_25.jpg',
        price: 80.0,
        inventory: 35
      },
      {
        name: 'Lightning Bolt Studs',
        description: `Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day, everywhere.`,
        category: 'Stud',
        imageUrl: '/img/Stud_26.jpg',
        price: 80.0,
        inventory: 35
      },
      {
        name: 'Daisy',
        description: `Two daisies are better than one. These lightweight flower studs add a sweet touch to your favorite stack.`,
        category: 'Stud',
        imageUrl: '/img/Stud_27.jpg',
        price: 40.0,
        inventory: 50
      },
      {
        name: 'Paris',
        description: `Getting the Parisian look never felt so easy thanks to these thick twisted gold hoop earrings. Pair them with the gold twist ring for a full elegant gold statement. These twisted gold hoops dipped in 14k gold look and feel amazing. Make sure to get them before they are gone.`,
        category: 'Statement',
        imageUrl: '/img/Statement_1.jpg',
        price: 75.0,
        inventory: 25
      },
      {
        name: 'Hana Marble Blue',
        description: `These beautiful enamel earrings with an artistic look and a fab color blend are great to wear to a formal event, but also easy to style with a casual outfit. They, practically, work on any occasion and offer you a unique & stylish look. Wear these gorgeous enamel earrings with an A-line blue dress, a pearl necklace, and a medium-sized cuff bracelet to obtain a sleek & contemporary look.`,
        category: 'Statement',
        imageUrl: '/img/Statement_2.jpg',
        price: 75.0,
        inventory: 25
      },
      {
        name: 'Tia Medium Gold',
        description: `You can never go wrong with this pair of gold hoop earrings with a high-polish texture and hypoallergenic titanium posts. Carefully crafted and dipped in 14k gold, these classic gold hoops are meant to be worn every single day by a confident and chic woman. Score bonus styling points by pairing these gold hoop earrings with a thin gold collar.`,
        category: 'Statement',
        imageUrl: '/img/Statement_3.jpg',
        price: 55.0,
        inventory: 30
      },
      {
        name: 'Cuidado',
        description: `With a clean, pared-down aesthetics, these gorgeous gold hoop earrings can be worn to any and every occasion. Created from hand-drawn designs by Sarah Therese, the Cuidado earrings have that perfectly minimal touch. Feel fabulous in your new summer dress by completing your look with a new pair of thick yet lightweight gold hoops with hypoallergenic titanium posts.`,
        category: 'Statement',
        imageUrl: '/img/Statement_4.jpg',
        price: 65.0,
        inventory: 30
      },
      {
        name: 'Hana Marble Pink',
        description: `Artistic, gorgeous and with fabulous powder pink accents, these enamel earrings will perfectly complete your boho-chic look. Handcrafted with attention to detail, these gold enamel earrings will become your favorite jewelry pieces. Wear them with a cashmere sweater in a muted color, a pencil skirt, and a pearl bracelet to create a feminine and stylish look.`,
        category: 'Statement',
        imageUrl: '/img/Statement_5.jpg',
        price: 75.0,
        inventory: 15
      },
      {
        name: 'Michelle Earrings',
        description: `With beautifully textured coins and a unique look, style your way into a fabulous look by wearing these hoop earrings with a link necklace, a structured dress, a pair of suede shoes and a jeans jacket. Up your earrings game with these sleek gold hoops.`,
        category: 'Statement',
        imageUrl: '/img/Statement_6.jpg',
        price: 75.0,
        inventory: 15
      },
      {
        name: 'M.I.M. Earrings',
        description: `These 2-in-1 pearl hoop earrings can be worn with or without pearls. Made of sterling silver with a thick gold layer, these pearl hoop earrings are hypoallergenic and chic. The delicate pearl charm turns them into the perfect pair for both daily wear and special events.`,
        category: 'Statement',
        imageUrl: '/img/Statement_7.jpg',
        price: 159.0,
        inventory: 5
      },
      {
        name: 'Hope',
        description: `These pearl drop earrings featuring organic freshwater pearls are our absolute favorite style this season. With a textured gold look and lustrous pearls, these gold-dipped pearl earrings are a classic statement of elegance. Pair these pearl drop earrings with a matching pearl necklace for a vintage chic look. Due to the unique nature of freshwater pearls, exact colors and shapes may vary slightly from the picture shown.`,
        category: 'Statement',
        imageUrl: '/img/Statement_8.jpg',
        price: 64.0,
        inventory: 15
      },
      {
        name: 'Abby',
        description: `The Abby Hoop Earrings are the epitome of elegance and grace. This fashion editors' favorite lends a touch of class to any outfit, and has been most recently spotted on Kiernan Shipka. Never too much or too subtle, the polished hoops are just the right touch to elevate your daily look.`,
        category: 'Statement',
        imageUrl: '/img/Statement_9.jpg',
        price: 59.0,
        inventory: 25
      },
      {
        name: 'Salome',
        description: `Delicate and unique, these enamel drop earrings with knife-edge mini hoops and squared-off enamel charms are trending right now. Beautifully crafted and hand-painted, these enamel drop earrings are dipped in 14K gold and feature hypoallergenic titanium ear posts. Add a unique touch to your everyday look with these dainty drop earrings.`,
        category: 'Statement',
        imageUrl: '/img/Statement_10.jpg',
        price: 59.0,
        inventory: 25
      },
      {
        name: 'Mismatch Sekai',
        description: `The fine gold plated Sekai mismatch earrings will change the way you wear jewelry. Tuck your everyday earrings away and take a walk on the wild side with a pair of edgy asymmetrical earrings. This style is on the come-up, so you won't want to miss it in all its glory.`,
        category: 'Statement',
        imageUrl: '/img/Statement_11.jpg',
        price: 75.0,
        inventory: 15
      },
      {
        name: 'Kinoko Marble Blue',
        description: `These highly creative gold enamel earrings are the perfect jewelry pieces to wear when you want to cater to your artistic side. Inspired by the texture of marble, featuring hypoallergenic titanium posts, the Kinoko gold earrings are hand painted and therefore unique. They look fabulous on both formal and casual occasions, depending on how you choose to match them. Wear these beautiful gold dipped earrings to add a contemporary & creative vibe to your style.`,
        category: 'Statement',
        imageUrl: '/img/Statement_12.jpg',
        price: 89.0,
        inventory: 10
      },
      {
        name: 'Nikki',
        description: `These gold chunky door knocker earrings designed with YouTube star Nikki Glamour will elevate any outfit in a second. Handcrafted in a contemporary style and dipped in 14k gold, these luscious statement gold earrings are those fun friends you go out with when you want to rock the night. Grab them now and up your jewelry game.`,
        category: 'Statement',
        imageUrl: '/img/Statement_13.jpg',
        price: 55.0,
        inventory: 35
      },
      {
        name: 'Sara',
        description: `Fabulous has a new name: Pearl Hoop Earrings - Sara. These gorgeous pearl drop earrings feature two Swarovski crystal pearls with a smooth and beautiful luster. Glamorous, elegant and unique, these pearl drop earrings will get you noticed wherever you go. Wear them with your hair up, a burgundy velvet blouse and a delicate necklace to showcase an impeccable style.`,
        category: 'Statement',
        imageUrl: '/img/Statement_14.jpg',
        price: 75.0,
        inventory: 25
      },
      {
        name: 'Euodias',
        description: `Dress your ears up with these gorgeous red heart earrings featuring natural freshwater pearls. Starring a beautiful gold heart, enamel and dangling organic pearls, these pearl drop earrings are an essential addition to your jewelry collection.`,
        category: 'Statement',
        imageUrl: '/img/Statement_15.jpg',
        price: 89.0,
        inventory: 15
      },
      {
        name: 'Azul',
        description: `The contrast between the blue Lapiz Lazuli and the organic pearls makes these 100% recycled Sterling Silver drop earrings timeless yet contemporary. Handcrafted in Sterling Silver and dipped in 14k gold for a glam vibe, these pearl drop earrings are as exquisite as their name. Get these lapis lazuli and freshwater pearl earrings and spruce up your jewelry collection. Due to the unique nature of precious stones and freshwater pearls, exact colors and patterns may vary slightly from the picture shown.`,
        category: 'Statement',
        imageUrl: '/img/Statement_16.jpg',
        price: 75.0,
        inventory: 25
      },
      {
        name: 'Fanny',
        description: `A new take on the timeless oversized hoops, these chic circle earrings are crafted in 100% recycled Sterling Silver and dipped in 14K gold. Lightweight and thin, these gorgeous circle earrings will add a unique sparkle to any outfit with their strands of cubic zirconia gems.`,
        category: 'Statement',
        imageUrl: '/img/Statement_17.jpg',
        price: 75.0,
        inventory: 25
      },
      {
        name: 'Moon',
        description: `These astro pearl earrings with intertwined sun and moon designs are the perfect addition to your day- pair these with the matching astro coin necklace for a full celestial statement, no matter your mood! All net proceeds go to organizations that support the Black Lives Matter movement. With a thick 14k gold layer, luscious natural pearls and shimmering cubic zirconia, these astro pearl earrings are all you need to elevate your look. Wear them with the complementary astro coin necklace to create a classy celestial theme. Due to the unique nature of freshwater pearls, exact colors and shapes may vary slightly from the picture shown.`,
        category: 'Statement',
        imageUrl: '/img/Statement_18.jpg',
        price: 89.0,
        inventory: 15
      }
    ]

    const [
      P1,
      P2,
      P3,
      P4,
      P5,
      P6,
      P7,
      P8,
      P9,
      P10,
      P11,
      P12,
      P13,
      P14,
      P15,
      P16,
      P17,
      P18,
      P19,
      P20,
      P21,
      P22,
      P23,
      P24,
      P25,
      P26,
      P27,
      P28,
      P29,
      P30,
      P31,
      P32,
      P33,
      P34,
      P35,
      P36,
      P37,
      P38,
      P39,
      P40,
      P41,
      P42,
      P43,
      P44,
      P45,
      P46,
      P47,
      P48,
      P49,
      P50,
      P51,
      P52,
      P53,
      P54,
      P55,
      P56,
      P57,
      P58,
      P59,
      P60,
      P61,
      P62,
      P63,
      P64,
      P65,
      P66,
      P67,
      P68,
      P69,
      P70,
      P71,
      P72,
      P73,
      P74,
      P75,
      P76,
      P77,
      P78,
      P79,
      P80,
      P81,
      P82,
      P83,
      P84,
      P85,
      P86,
      P87,
      P88,
      P89,
      P90,
      P91,
      P92,
      P93,
      P94,
      P95,
      P96,
      P97,
      P98,
      P99,
      P100
    ] = await Product.bulkCreate(products)
    console.log(green('Seeded products!'))

    //user seeding
    const users = [
      {
        email: 'weronika@me.com',
        password: 'invisiblewoman1',
        firstName: 'Weronika',
        lastName: 'Janczuk'
      },
      {
        email: 'victoria@me.com',
        password: 'invisiblewoman2',
        firstName: 'Victoria',
        lastName: 'Ho',
        isAdmin: true
      },
      {
        email: 'michelle@me.com',
        password: 'invisiblewoman3',
        firstName: 'Michelle',
        lastName: 'Dacal',
        isAdmin: true
      },
      {
        email: 'kay@me.com',
        password: 'invisiblewoman4',
        firstName: 'Kay',
        lastName: 'XiongPachay'
      },
      {
        email: 'john@me.com',
        password: 'invisiblewoman5',
        firstName: 'John',
        lastName: 'Doe'
      },
      {
        email: 'jane@me.com',
        password: 'invisiblewoman6',
        firstName: 'Jane',
        lastName: 'Doe'
      }
    ]

    const [U1, U2, U3, U4, U5, U6] = await User.bulkCreate(users)
    await User.bulkCreate(
      Array(1000)
        .fill()
        .map(user => ({
          email: faker.internet.email(),
          password: faker.internet.password(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName()
        }))
    )
    console.log(green('Seeded users!'))

    //order seeding
    const orders = [
      {
        status: 'completed',
        paymentMethod: 'credit',
        shippingAddress: '1050 1st Ave.',
        shippingCity: 'New York City',
        shippingState: 'NY',
        shippingZIP: 10004,
        billingAddress: '1050 1st Ave.',
        billingCity: 'New York City',
        billingState: 'NY',
        billingZIP: 10004,
        userId: U1.id
      },
      {
        status: 'in-progress',
        userId: U2.id
      },
      {
        status: 'completed',
        paymentMethod: 'venmo',
        shippingAddress: '2050 2nd Ave.',
        shippingCity: 'Minneapolis',
        shippingState: 'MN',
        shippingZIP: 55408,
        billingAddress: '2050 2nd Ave.',
        billingCity: 'Minneapolis',
        billingState: 'MN',
        billingZIP: 55408,
        userId: U3.id
      },
      {
        status: 'in-progress',
        userId: U4.id
      }
    ]

    const [O1, O2, O3, O4] = await Order.bulkCreate(orders)
    console.log(green('Seeded orders!'))

    //orderItem seeding
    const orderItems = [
      {
        productId: P1.id,
        quantity: 1,
        orderId: O1.id,
        price: P1.price
      },
      {
        productId: P65.id,
        quantity: 3,
        orderId: O1.id,
        price: P65.price
      },
      {
        productId: P77.id,
        quantity: 2,
        orderId: O1.id,
        price: P77.price
      },
      {
        productId: P100.id,
        quantity: 1,
        orderId: O1.id,
        price: P100.price
      },
      {
        productId: P54.id,
        quantity: 3,
        orderId: O2.id,
        price: P54.price
      },
      {
        productId: P33.id,
        quantity: 1,
        orderId: O3.id,
        price: P33.price
      },
      {
        productId: P34.id,
        quantity: 1,
        orderId: O3.id,
        price: P34.price
      },
      {
        productId: P35.id,
        quantity: 1,
        orderId: O3.id,
        price: P35.price
      },
      {
        productId: P2.id,
        quantity: 5,
        orderId: O4.id,
        price: P2.price
      },
      {
        productId: P10.id,
        quantity: 3,
        orderId: O4.id,
        price: P10.price
      },
      {
        productId: P98.id,
        quantity: 1,
        orderId: O4.id,
        price: P98.price
      }
    ]

    const [
      I1,
      I2,
      I3,
      I4,
      I5,
      I6,
      I7,
      I8,
      I9,
      I10,
      I11
    ] = await OrderItem.bulkCreate(orderItems)
    console.log(green('Seeded order items!'))
  } catch (err) {
    console.log(red(err))
  }
}

module.exports = seed
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'))
      db.close()
    })
    .catch(err => {
      console.error(red('Oh noes! Something went wrong!'))
      console.error(err)
      db.close()
    })
}
