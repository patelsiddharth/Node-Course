require('../src/db/mongoose')

const User = require('../src/models/user')

// User.findByIdAndUpdate('602bde6e9aceb148dccd0063', {
//     age : 10
// }).then( updatedUser => {
//     console.log(updatedUser)
//     return User.countDocuments({age : 10})
// }).then( count => {
//     console.log(count)
// }).catch(error => {
//     console.log(error)
// })

const UpdateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id , { age });
    return User.countDocuments({age});
}

UpdateAgeAndCount('602bde6e9aceb148dccd0063', 10)
.then( result => {
    console.log(result)
})
.catch(error => {
    console.error(error)
})