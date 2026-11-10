# Fix the Lesson

A tiny course module used in the Instructional Designer (Skilling Courses) intern interview.

The module teaches **JavaScript `Array.reduce`** through a shopping-cart example.
It was written in a hurry, so it has problems: some in the code, some in the lesson text,
and some in the quiz. Your job is to find them and fix them through a Pull Request.

```
lessons/01-array-reduce/
  lesson.md            the lesson learners read
  examples/cart.js     code used in the lesson
  examples/cart.test.js  tests for that code
quizzes/
  01-array-reduce.md   the quiz that goes with the lesson
```

Start with [TASK.md](./TASK.md).

Requirements: Node.js 18 or newer. There are no dependencies to install.

```bash
npm test
```
