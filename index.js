var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 //the price of each item should be randomly generated
  var price = Math.floor(Math.random() * 100)
  //push the new cart array with item Name & item Price
   cart.push( {itemName: item, itemPrice: price})
   //return <itemName> has been added to your cart.
   return `${item} has been added to your cart.`

}

function viewCart() {
  // write your code here
  //if cart is empty return Your shopping cart is empty.
  if(!cart.length){
    return 'Your shopping cart is empty.'
  }
  //loop over ever item in cart
for(let i = 0; i < cart.length; i++){

}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
