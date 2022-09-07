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
  
  ## Description 
  ${data.description}

  ## Table of Content

  ## Installation 
  ${data.installation}

  ## License 
  ${data.license}

  ## Contributing ${data.contribute}
  ## Tests ${data.tests}
  ## Contact me: ${data.userName} ${data.userEmail}




`; 
}

module.exports = generateMarkdown;