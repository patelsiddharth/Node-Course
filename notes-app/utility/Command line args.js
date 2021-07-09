const chalk = require('chalk');
const command = process.argv[2];

if(command === 'add')
{
    console.log(chalk.green.bold('Adding note'));
}
else if(command === "remove")
{
    console.log(chalk.red.bold('Removing note'));
}