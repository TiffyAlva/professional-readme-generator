// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if(license == "Apache 2.0 License" ) {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if(license == "Boost Software License 1.0" ) {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }
  else if(license == "BSD 3-Clause License") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description: 
  ${data.description}
  

  ## Table of Contents:
  * [User Story](#user-story)
  * [Acceptance criteria](#acceptance-criteria)
  * [Visuals](#visuals)
  * [Installation](#installation)
  * [Usage](#usage) 
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Contact Informations](#contact) 
  * [Demo Video](#demo-video) 


  ## Installation: 
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License: 
  ${data.license}

  ## Contribution: 
  ${data.contribution}
  
  ## Tests:
   ${data.tests}
  
   ## Contact: 
  ${data.github} ${data.email} ${data.repo}
   




`; 
}

module.exports = generateMarkdown;