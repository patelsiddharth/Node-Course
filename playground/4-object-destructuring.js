const product = {
    name : 'book',
    price : 100,
    stock : 2001,
    author : 'Siddharth'
}

const name = product.name;
const price = product.price;

// Object destructuring
// Here we can also define property which does not exist. value of those property will be undefined
// Can also give custom name to property of object
// Can also give default value to properties. These value will be used only when object does not have that property
const {name : productName, stock, rating = 5} = product;

console.log(productName)
console.log(stock)
console.log(rating)