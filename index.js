// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


const writeFileAsync = util.promisify(fs.writeFile);


// Questions array in function
const promptQuestions = () => {
  return inquirer.prompt([{
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
      choices: ["MIT", "GNU General Public", "ISC", "Apache", "fifth"],
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
  ]);
};
// Create a function to write README file
const generateHTML = (answers) =>
  `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
      <title>README</title>
    </head>
    <body class="m-3 p-3">
      <div class="container-fluid">
        <h1 class="display-5 pb-3 text-center">${answers.title}</h1>
      </div>
      <div class="container-fluid pt-5 m-3">
        <h2 class="h4">Description</h2>
        <p>${answers.description}</p>
      </div>
      <div class="container-fluid pt-5 m-3">
        <h2 class="h4">Table of Contents</h2>
        <ul>
          <li><a href="#installation">Installation</a></li>
          <li><a href="#usage">Usage</a></li>
          <li><a href="#license">License</a></li>
          <li><a href="#credits">Contributing</a></li>
          <li><a href="#tests">Tests</a></li>
          <li><a href="#questions">Questions</a></li>
        </ul>
      </div>
      <div class="container-fluid pt-5 m-3">
        <h2 class="h4" id="installation">Installation</h2>
        <p>${answers.installation}</p>
      </div>
      <div class="container-fluid pt-5 m-3">
        <h2 class="h4" id="usage">Usage</h2>
        <p>${answers.usage}</p>
      </div>
      <div class="container-fluid pt-5 m-3">
        <h2 class="h4" id="license">License</h2>
        <p>This application is covered under the ${answers.license} license.</p>
      </div>
      <div class="container-fluid pt-5 m-3">
        <h2 class="h4" id="credits">Contributing</h2>
        <p>${answers.credits}</p>
      </div>
      <div class="container-fluid pt-5 m-3">
        <h2 class="h4" id="tests">Tests</h2>
        <p>${answers.tests}</p>
      </div>
      <div class="container-fluid pt-5 m-3">
        <h2 class="h4" id="questions">Questions</h2>
        <p>If you have any questions, please contact GitHub user ${answers.github} at <a href="mailto:${answers.email}">${answers.email}</a>.</p>
        <p>Thank you.</p>
      </div>
    </body>
    
    </html>`;

// initialize app
const init = () => {
  promptQuestions()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
}









// // Function call to initialize app
init();