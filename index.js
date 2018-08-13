var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var thing = {
  itemName: item,
  itemPrice: Math.random()*100
}
cart.push(thing);
return item + " has been added to your cart.";
}

function viewCart() {
  if (cart.length < 1){
  return "Your shopping cart is empty."
} else if (cart.length = 1) {
  return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + "."

} else if (cart.length = 2) {
  return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ", and " + cart[1].itemName + " at $" + cart[1].itemPrice + "."

} else {
  return cart "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ", " + cart[1].itemName + " at $" + cart[1].itemPrice + "," + " and " + cart[2].itemName + " at $" + cart[2].itemPrice + "."
}
}

var  price = []
function total() {
  for (var i = 0; i <= cart.length; i++) {
    price = cart[i].itemPrice + price
  }
   return price
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  if (cardNumber = 0) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
  return "Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + "."
}
}
