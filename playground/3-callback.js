//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a,b, sum) => {
    setTimeout(() => {
        // console.log('2 Sec timer')
        sum(a+b);
    }, 2000);
}

const sum = (result) => {
    console.log('Result of sum : ' + result);
}

add(1, 4, sum);