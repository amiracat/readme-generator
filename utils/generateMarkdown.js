// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license === "MIT") {
    data.badge = `License-MIT-yellow`
  } else if 
    (data.license === "Apache") {
      data.badge = `License-Apache%202.0-blue`
    }
   else {
    data.badge = `License-ISC-blue`
  };
};


// MIT: 
//"https://img.shields.io/badge/License-MIT-yellow.svg"
//GNU GPL: 
//"https://img.shields.io/badge/License-GPLv3-blue.svg"
// ISC: 
//"https://img.shields.io/badge/License-ISC-blue.svg"
// Apache 2.0: 
//"https://img.shields.io/badge/License-Apache%202.0-blue.svg"


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}
  ![](https://img.shields.io/badge/${data.badge}.svg)

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)


  ## Installation

  ${data.installation}
  
  ## Usage

  ${data.usage}

  ## License

  This application is covered under the ${data.license} license.
  
  ## Contributing

  ${data.credits}
  
  ## Tests  

  ${data.tests}

  ## Questions

  If you have any questions, please contact ${data.github} at ${data.email}.

  Thank you.
  `;
};

module.exports = generateMarkdown;