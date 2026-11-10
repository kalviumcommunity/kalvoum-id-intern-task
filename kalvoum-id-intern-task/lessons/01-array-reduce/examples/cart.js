// Helpers for the shopping-cart example used in lesson.md

function cartTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

function averagePrice(items) {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  return total / items.length;
}

module.exports = { cartTotal, averagePrice };
