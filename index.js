// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

//const writeFileAsync = util.promisify(fs.writeFile);


// Questions array in function
// const promptQuestions = () => {
//   return inquirer.prompt([{
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What are instructions on using your project?',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List your contributors, if any, with links to their GitHub profiles',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are testing instructions?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project use?',
    choices: ["MIT", "GPLv3", "ISC", "N/A"],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address',
  },
];

// Create a function to write README file

inquirer
  .prompt(questions)
  .then(function (data) {
    fs.writeFile("README.md", generateMarkdown(data), function (err) {
      if (err) {
        throw err;
      };
      console.log("New README file created with success!");
    });
  });

// initialize app
function init() {
 
};

// // Function call to initialize app
init();