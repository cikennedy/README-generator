// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [
    // Questions from the user to get the relevant information in order to generate the README. 
    {
        type: 'input',
        name: 'project',
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please provide a short description of the what, why, and how of your project.",
    },
    {
        type: 'input',
        name: 'installation',
        message: "When installing dependencies, what command should be used?",
        default: "npm i",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please provide instructions and examples for use.",
    },
    {
        type: 'input',
        name: 'credits',
        message: "List collaborators if any (links to GitHub profiles), or links to any tutorials or third-party assets that require attribution.",
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose a license for your project.",
        choices: ['ISC', 'MIT', 'Apache License 2.0', 'GNU GPL 3.0', 'Other', 'None'],
    },
    {
        type: 'input',
        name: 'features',
        message: "If your project has a lot of features, list them here.",
    },
    {
        type: 'input',
        name: 'contribution',
        message: "If you would like others to contribute, please include guidelines for how to do so.",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Please provide examples on how to run tests if you have created tests.",
    },
    {
        type: 'input',
        name: 'github',
        message: "Please provide your GitHub username.",
    },
    {
        type: 'input',
        name: 'email',
        message: "Please provide your email address.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Please wait. Generating README.');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    });
}

// Function call to initialize app
init();
