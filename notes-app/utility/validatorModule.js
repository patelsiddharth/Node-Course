// loading npm module validator
// First need to install using command : npm install validator
const validator = require('validator')

// const util = require('./utils.js')
// const logMessage = require('./notes.js')

// console.log('::: APP.JS :::')

// console.log(util(3,5));

// console.log(logMessage())

// IsEmail method of nmp module validator
console.log('Validate email - siddharth@gmail.com ::: ' + validator.isEmail('siddharth@gmail.com'))
console.log('Validate email - example.com ::: ' + validator.isEmail('example.com'))

// IsURL
console.log('Validate URL - https://google.com ::: ' + validator.isURL('https://google.com'))

console.log('test');