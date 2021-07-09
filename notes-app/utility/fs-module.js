// Importing the fs module
const fs = require('fs');

// writeFileSync method will create a new file if file is not present and overwrite the content with content provided
fs.writeFileSync('notes.txt', 'This file is created using NODE.JS')

fs.appendFileSync('notes.txt', '\nThis line is appended using appendFileSync method of fs module');