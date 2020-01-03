const inquirer = require('inquirer');

const files = require('./files');

module.exports = {
  askGithubCredentials: () => {
    const questions = [
      {
        name: 'modelName',
        type: 'input',
        message: 'Enter your model name:\n',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your model name.';
          }
        }
      },
      {
        name: 'modelType',
        type: 'input',
        message: 'Enter your model type:\n1- String\n2- Number\n3- Boolean\n',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your model type.';
          }
        }
      },
      {
        name: 'modelType',
        type: 'input',
        message: 'Enter your model type:\n1- String\n2- Number\n3- Boolean\n',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your model type.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};
