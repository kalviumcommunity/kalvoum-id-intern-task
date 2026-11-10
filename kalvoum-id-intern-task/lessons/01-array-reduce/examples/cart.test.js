const test = require("node:test");
const assert = require("node:assert");
const { cartTotal, averagePrice } = require("./cart");

test("cartTotal adds up price times quantity", () => {
  const items = [
    { name: "Notebook", price: 100, quantity: 2 },
    { name: "Pen", price: 50, quantity: 1 },
  ];
  assert.strictEqual(cartTotal(items), 250);
});

test("cartTotal of an empty cart is 0", () => {
  assert.strictEqual(cartTotal([]), 0);
});

test("averagePrice returns the mean price of the items", () => {
  const items = [
    { name: "Notebook", price: 100, quantity: 2 },
    { name: "Pen", price: 50, quantity: 1 },
  ];
  assert.strictEqual(averagePrice(items), 75);
});

test("averagePrice of an empty cart is 0, not NaN", () => {
  assert.strictEqual(averagePrice([]), 0);
});
