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
        message: "",
    },
    {
        type: 'input',
        name: 'project',
        message: "",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
