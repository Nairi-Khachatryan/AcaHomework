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
