const yargs = require('yargs');
const chalk = require('chalk');


// Create Add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(args)
    {
        console.log(chalk.green.bold('Adding note'));
        console.log('Title : ' + args.title);
        console.log('Body : ' + args.body);
    }
});

// Create Remove command
yargs.command({
    command : 'remove',
    describe : 'Remove note',
    handler : function(){
        console.log(chalk.red.bold('Removing note'));
    }
})

// Create List Command
yargs.command({
    command : 'list',
    describe : 'List all the notes',
    handler : function(){
        console.log(chalk.yellow.bold('Listing all the notes.'))
    }
})

// Create read Command
yargs.command({
    command : 'read',
    describe : 'Read all the notes',
    handler : function(){
        console.log(chalk.blue.bold('Reading a notes.'))
    }
})

// Used to parse command line argument
yargs.parse();

// this is required since we are parsing the command line argument
// This will also display all the arguments
//console.log(yargs.argv);