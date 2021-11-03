// Created packages for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Created an array of questions for user to answer and input

const questions = [

    {
        type: "module",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "module",
        message: "What is your email address?",
        name: "email address"
    },
    {
        type: "module",
        message: "What is the name of this project?",
        name: "title"
    },
    {
        type: "module",
        message: "Please enter a short description of your project:",
        name: "description"
    },
    {
        type: "module",
        message: "What command should be called to install dependencies for this project?",
        name: "installation"
    },
    {
        type: "module",
        message: "Who are the contruibutors for this project?",
        name: "contribution"
    },
    {
        type: "module",
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
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    writeToFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('success')
    });
}

// Created function to initialize program to write README file
function init() {
    prompt(questions).then(function (data) {
        var fileName = 'README.md';
        writeToFile(fileName, data)
    });
}

// Created function to call program
init();