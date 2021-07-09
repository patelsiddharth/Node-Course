const chalk = require('chalk');

const log = console.log;

log(chalk.green('Success !'));
log(chalk.bold.red('Failed !!!'));
log(chalk.bold.red.inverse('Failed !!!'));

log(chalk.blue.italic.bold.inverse('Testing Nodemon'));