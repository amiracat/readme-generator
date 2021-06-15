
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license === "MIT") {
    data.badge = "https://img.shields.io/badge/License-MIT-yellow.svg"
  } else if (data.license = "GNU GPL") {
    data.badge = "https://img.shields.io/badge/License-GPLv3-blue.svg"
  } else if (data.license = "ISC") {
    data.badge = "https://img.shields.io/badge/License-ISC-blue.svg"
  } else {
    return (null)
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ![badge](https://img.shields.io/badge/License-${data.license}-blue.svg)

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
  License used: ${data.license}.
  
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