const { rejects } = require("assert")
const { promises } = require("fs")

const sum = (a, b) => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(a + b);
            }, 2000);
    })
}

// promise chainig example
// sum(20,10).then( data => {
//     console.log(data)
//     sum(data, 5).then( result => {
//         console.log(result)
//     }).catch(error => {
//         console.log(error)
//     })
// }).catch(error => {
//     console.log(error)
// })

// promise chainig example
sum(20,1).then( s1 => {
    console.log(s1);
    return sum(s1, 3)
}).then( result1 => {
    console.log(result1)
}).catch(error => {
    console.log(error)
})