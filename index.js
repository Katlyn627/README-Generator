// Created packages for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Created an array of questions for user to answer and input

const questions = [

    {
        type: "input",
        message: "What is your Github username?",
        name: "udername"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email address"
    },
    {
        type: "input",
        message: "What is the name of this project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a short description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "What command should be called to install dependencies for this project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Who are the contruibutors for this project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What command should be called to run testing on this project?",
        name: "tests"
    },
    {
        type: "checkbox",
        message: "What liscense is required for you project?",
        name: "license",
        // https://docs.github.com/en/rest/reference/licenses
        choices: [
            "MIT",
            "APACHE",
            "BSD",
            "ISC",
            "GPL",
            "None"
        ]
    }
];
