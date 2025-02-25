// 1.
// let counter1 = require('./utils/counter')
// let counter2 = require('./utils/counter')

// console.log(counter1.count())
// console.log(counter2.count())
// console.log(counter2.count())

// 2. 
// let cat = require('./cat/main')
// console.log(cat.create('小花'))
// index.js方式
// let cat2 = require('./cat')
// console.log(cat2.create('小灰'));
// package.json方式
let cat2 = require('./cat2')
console.log(cat2.create('小黑'));