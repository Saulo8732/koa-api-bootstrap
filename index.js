const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const CLI = require('clui');


const Spinner = CLI.Spinner;

const files = require('./lib/files');
const inquirer  = require('./lib/inquirer');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Koa-CLI', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  const credentials = await inquirer.askGithubCredentials();
  console.log(credentials);
};

const status = new Spinner('Authenticating you, please wait...');

run();
