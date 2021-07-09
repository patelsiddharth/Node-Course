const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Add command
yargs.command({
    command : 'add',
    describe : 'Add note',
    builder : {
        title : {
            describe : 'Title of note',
            demandOptions : true,
            type : 'string'
        },
        body : {
            describe : 'Body of note',
            demandOptions : true,
            type : 'string'
        }
    },
    handler(args)
    {
        notes.AddNote(args.title, args.body);
    }
})

// Remove note command
yargs.command({
    command : 'remove',
    describe : 'Remove note',
    builder : {
        title : {
            describe : 'Title of note to be removed',
            type : 'string',
            demandOptions : true
        }
    },
    handler(args)
    {
        notes.RemoveNote(args.title);
    }
})

// List commnad 
yargs.command({
    command : 'list',
    describe : 'Lists all the tasks',
    handler(args)
    {
        notes.ListTask();
    }
})

// Read note command
yargs.command({
    command : 'read',
    describe : 'Read a particular note',
    builder : {
        title : {
            describe : 'Title of note to read',
            demandOptions : true,
            type : 'string'
        }
    },
    handler(args)
    {
        notes.ReadNote(args.title);
    }
})

yargs.parse();