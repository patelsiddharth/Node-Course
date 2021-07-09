// const doWork = () => {

// }
// // This will return undefined
// console.log(doWork());

// const asyncDoWork = async () =>
// {

// }
// // Sync method will always return a promise
// console.log(asyncDoWork())

// const asyncDoWorkWithReturn = async () =>
// {   
//     return 'Siddharth'
// }
// // Sync method will always return a promise
// console.log(asyncDoWorkWithReturn())
// asyncDoWorkWithReturn().then(result => {
//     console.log(result)
// }).catch(error => {
//     console.log(error)
// })


const sum = (a, b) => {
    return new Promise( (resolve, reject) => 
    {
        setTimeout(()=> {
            if(a < 0 || b < 0)
            {
                reject('Numbers must be non negative')
            }
            resolve(a + b);
        }, 2000);
    })
}

const work = async () => {

    // Even though sum() method return promise which is asyncchronous
    // await will ensure that the execution is kept on hold until current method is not executed
    const res1 = await sum(1,99)
    console.log('--- After 2 sec ---')
    console.log(res1)

    const res2 = await sum(res1, -10)
    console.log('--- After 4 sec ---')
    console.log(res2)

    const res3 = await sum(res2, 10)
    console.log('--- After 6 sec ---')
    console.log(res3)
    return res3;
}

work().then( result => {
    console.log(result)
}).catch( error => {
    console.log(error)
})