console.log('::: UTILS.JS :::')

const name = 'Siddharth';

// This is where we define all of the things which will be shared with all the other modules
// Whatever assigned here will be returned when we import this module using require
// module.exports = name;

const add = (a,b) => {
    return a+b;
}

module.exports = add;