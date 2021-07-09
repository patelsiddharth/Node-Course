const fs = require('fs');
// book = {
//     title : "ego is the enemy",
//     autor : 'Ryan holiday'
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parseData = JSON.parse(bookJSON);
// console.log(parseData);
// console.log(parseData.autor);

// fs.writeFileSync('1-book.json',bookJSON);

// const dataBuffer = fs.readFileSync('1-book.json');
// console.log(dataBuffer.toString())
// const bookString = dataBuffer.toString();
// console.log(JSON.parse(bookString))


const data = fs.readFileSync('1-book.json');
const stringData = data.toString();
const jsonData = JSON.parse(stringData);
jsonData.name = 'Siddharth';
jsonData.age = 24;

console.log(jsonData)

fs.writeFileSync('1-book.json',JSON.stringify(jsonData));