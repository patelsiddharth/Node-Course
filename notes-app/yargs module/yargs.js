// yargs provide a ways to parse command line arguments
const yargs = require('yargs');

console.log('Using process.argc')
console.log(process.argv);

console.log();

console.log('Using yargs.argc')
console.log(yargs.argv);

// eg : node yargs.js add --title="Title 1" --body="This is body of title 1"
// result : 
    // {
    //   _: [ 'add' ],
    //   title: 'Title 1',
    //   body: 'This is body of title 1',
    //   '$0': 'yargs.js'
    // }