const fs = require('fs');
const chalk = require('chalk');

const AddNote = (title, body) =>
{
    const notes = LoadNotes();

    const duplicateNote = notes.find(note => note.title === title);

    debugger

    // No duplicate note found. Proceed to save note
    if(!duplicateNote)
    {
        notes.push({
            title : title,
            body : body
        })
        SaveNotes(notes);
        console.log(chalk.green.bold('New Note Added.'));
    }
    else
    {
        console.log(chalk.red.bold('Note already exist !!!'));
    }
    
}

function LoadNotes()
{
    try
    {
        const data = fs.readFileSync('notes.json');
        const jsonData = data.toString();
        return JSON.parse(jsonData);
    }
    catch(e)
    {
        return [];
    }
}

function SaveNotes(notes)
{
    const data = JSON.stringify(notes);
    fs.writeFileSync('notes.json', data);
}

const RemoveNote = (title) =>
{
    const notes = LoadNotes();
    if(notes.length === 0)
    {
        console.log(chalk.red.bold('Note not found !!!'));
    }
    else
    {
        const updatedList = notes.filter((note) => note.title !== title);

        if(updatedList.length == notes.length)
        {
            console.log(chalk.red.bold('Note not found !!!'));
        }
        else
        {
            console.log(updatedList);
            SaveNotes(updatedList);
            console.log(chalk.green.bold('Note Removed Successfully.'));
        }
    }
}

const ListTask = () =>
{
    const notes = LoadNotes();
    if(notes.length === 0)
    {
        console.log(chalk.bold.red.inverse.bgWhite('No note found!!!')); 
    }
    else
    {
        console.log(chalk.bold.underline('::: Your Notes :::')); 
        console.log(); 
        let index = 1;
        notes.forEach(function(note)
        {
            console.log(index + '. ' + note.title + ' : ' + note.body);
            index++;
        });
    }
}

const ReadNote = title =>
{
    const notes = LoadNotes();
    if(notes.length === 0)
    {
        console.log(chalk.bold.red.inverse.bgWhite('No note found!!!')); 
    }
    else
    {
        const note = notes.find(note => note.title === title);
        if(title)
        {
            console.log(chalk.bold.underline('::: Your Notes :::')); 
            console.log(); 
            console.log(chalk.inverse(note.title));
            console.log(note.body);
        }
        else
        {
            console.log(chalk.red.bold('Note not found !!!'));
        }
    }
}

module.exports = {
    AddNote : AddNote,
    RemoveNote : RemoveNote,
    ListTask : ListTask,
    ReadNote : ReadNote
}