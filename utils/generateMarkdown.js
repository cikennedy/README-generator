// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-yellow.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`;
  }
  return '';
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License`;
  }
  return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [Credits](#credits)
  
  ${renderLicenseLink(data.license)}

  * [Badges](#badges)

  * [Features](#features)

  * [Contribution](#contribution)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  For this project to run properly, install the necessary dependencies by using the following terminal command: ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ${renderLicenseSection(data.license)}

  This project is licensed using the ${data.license} license.

  ## Badges

  ${renderLicenseBadge(data.license)}

  ## Features

  ${data.features}

  ## Contribution

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions or feedback about the project, please contact me by email at [${data.email}](mailto:${data.email}). 

  Other projects and work are featured at [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
