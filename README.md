arity 
=====
[![CircleCI](https://circleci.com/gh/samouri/arity.svg?style=svg)](https://circleci.com/gh/samouri/arity)

> In logic, mathematics, and computer science, the arity /ˈærɪti/ of a function is the number of arguments or operands that the function takes.

Sometimes you want to be able to tell how many arguments a function takes.
99% of the time you can do something as simple as calling `fn.length` -- but this will not work if a function accesses the [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object directly.
This module will even return the correct number of arguments to expect for those tricky cases.



### Install

```bash
npm install --save-dev arity
```

### To use
```javascript
const arity = require('arity');

function doSomething(arg1, arg2) { ... }

const arityOfDoSomething = arity(doSomething); // value will be 2
```
