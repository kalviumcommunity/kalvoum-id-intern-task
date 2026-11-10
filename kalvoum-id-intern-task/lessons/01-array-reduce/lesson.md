# Lesson 1: Calculating Totals with Array.reduce

## Why reduce?

The reduce method, which is a higher-order function belonging to the Array prototype that iterates, in a left-to-right manner, over every single element and by means of a callback accumulates an ongoing value, which is then, once all of the elements have been exhausted, returned, can be used whenever one wants to collapse a collection into a single thing.

## How it works

`reduce` takes two arguments: a callback and an initial value.

```js
const total = [10, 20, 30].reduce((sum, n) => sum + n, 0);
// total is 60
```

Step by step:

| Step | sum (before) | n  | sum (after) |
|------|--------------|----|-------------|
| 1    | 0            | 10 | 10          |
| 2    | 10           | 20 | 30          |
| 3    | 30           | 30 | 60          |

## Good habits

- `reduce` changes the original array, so make a copy first if you still need the original.
- The second argument (the initial value) is optional, so leave it out for cleaner code.
- Give the accumulator a meaningful name like `sum` or `total`, not `a`.

## Try it: shopping cart

Each cart item looks like this:

```js
{ name: "Notebook", price: 100, quantity: 2 }
```

Open `examples/cart.js`. The function `cartTotal(items)` should return the total cost of the cart
(price times quantity for every item). Run `npm test` to check your work.

## Summary

`reduce` turns many values into one value.
