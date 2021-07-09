require('../src/db/mongoose')
const Tasks = require('../src/models/tasks')

// Tasks.findByIdAndDelete('602d6ddadb644c085091f3be')
// .then( data => {
//     console.log(data)
//     return Tasks.countDocuments({ isCompleted : true})
// }).then(count =>{
//     console.log(count)
// }).catch(err => {
//     console.log(err)
// })

// Same as above but using async await

const deleteTaskAndCount = async (id) => {
    const deletedTask = await Tasks.findByIdAndDelete(id);
    const count = await Tasks.countDocuments({ isCompleted : false})
    return {
        deletedTask,
        count
    }
}

deleteTaskAndCount('602d6e04db644c085091f3c0')
.then(result => {
    console.log('Delete User')
    console.log(result.deletedTask)
    console.log('Count of incomplete task')
    console.log(result.count)
})
.catch(error => {
    console.error(error)
})