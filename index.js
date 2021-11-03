// Created packages for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Created a function to write date to the README file

function writeToFile(fileName, data) {
    fs.writeFileSync(`${fileName}.md`, data,(err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      }) 
}

// Create async function to initialize app and get inquirer prompts and answers

async function init() {
    // let answers = await userInput();
    inquirer.prompt([

        {
            type: "input",
            message: "What is your Github username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
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
            type: "input",
            message: "What is the usage of the project?",
            name: "usage"
        },
        {
            type: "list",
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
        }]).then((answers) => {
console.log(answers);
writeToFile(("READMEtemplate"),(generateMarkdown(answers)));
})
} 

// Function call to initialize application
init();