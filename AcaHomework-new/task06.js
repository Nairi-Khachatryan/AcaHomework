<<<<<<< HEAD
// TASK -6 Discount Calculator
// Write a function calculateDiscount(price, discount) that takes a price and a discount
// percentage. The input values can be strings or numbers. Return the final price after applying the
// discount

const calculateDiscount = (price, discount) => {
  let discountPrice = 0;
  if (!isNaN(price) && !isNaN(discount)) {
    if (discount > 0 && discount <= 100) {
      return `price = ${price}$ discount = ${discount}$  discountPrice = ${(discountPrice =
        price - price * (discount / 100))}$ `;
    } else {
      return "discount must be beetwen 0 and 100";
    }
  } else {
    return "Only Numbers";
  }
};
const res = calculateDiscount('100','10');
console.log(res);
=======
/**
 * Task 6
E-commerce Cart System
Create a cart system for an e-commerce website. Each product in the cart should have a name,
SKU, price, and quantity.
1. Add a Product:
○ Implement a function addProduct(product) that takes a product object and
adds it to the cart. If the product already exists in the cart, increase its quantity.
2. Remove a Product:
○ Implement a function removeProduct(SKU) that removes a product from the
cart based on its SKU.
3. Update Quantity:
○ Implement a function updateQuantity(SKU, quantity) that updates the
quantity of a product in the cart.
4. Calculate Total:
○ Implement a function calculateTotal() that calculates the total price of all
items in the cart.
5. Get Cart Details:
○ Implement a function getCartDetails() that returns the details of all items in
the cart.
6. Add a discount feature: Implement a function applyDiscount(discountCode) that
applies a discount to the total price based on a given discount code
 */
const discountObj = {
  SUMMER21: 10,
  WINTER: 5,
  WELCOME: 15,
};
const cart = [];
function addProduct(array, name, article, price, quantity) {
  //es xndri vra 3 or gnach chei karoxanum enpes anei vor ete mi apraniqich 2 hata menak qanak@ avelana
  //heto mi kerp exav
  for (let value of array) {
    if (array.length > 0) {
      if (value.article === article) {
        return (value.quantity += 1);
      }
    }
  }
  const product = {
    name,
    article,
    price,
    quantity,
  };
  array.push(product);

  return array;
}
function remopveProduct(article) {
  let idx = -2;
  for (let value of cart) {
    if (value.article === article) {
      idx = cart.indexOf(value);
      cart.splice(idx, 1);
    }
  }
  return cart;
}
function updateQty(article, quantity) {
  for (let value of cart) {
    if (value.article === article) {
      return (value.quantity = quantity);
    }
  }
  return `no product with this  article -> ${article}`;
}
function calculateTotal() {
  let total = 0;
  for (let value of cart) {
    total += value.price;
  }
  return total;
}
function getCartDetails() {
  const newArr = cart.map((el) => {
    return ` name = ${el.name} article -> ${el.article} price = ${el.price} qty =  ${el.quantity}`;
  });
  return newArr;
}
function applyDiscount(discount) {
  let percent = null;

  if (discount in discountObj) {
    percent = discountObj[discount] / 100;
  } else {
    return "Invalid discount code";
  }

  let totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCost += cart[i].price;
  }

  let discountAmount = totalCost * percent;
  let newTotal = totalCost - discountAmount;

  return `total: $${newTotal.toFixed(
    2
  )}, Discount amount: $${discountAmount.toFixed(2)}`;
}
addProduct(cart, "lapTop", "001", 1000, 1);



updateQty("001", 5);
calculateTotal();
getCartDetails();
let res = applyDiscount("SUMMER21");
console.log(res);
console.log(cart);
>>>>>>> 46511a2 (Добавлены новые домашние задания)
