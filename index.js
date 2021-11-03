// Created packages for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Created an array of questions for user to answer and input

function userInput(){
    return inquirer.prompt([
    {name: 'license',
    message: 'What type of liscense do you wish to use for your application? Please select from list below.:',
    type: 'list',
    choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause license", "BSD 3-clause license", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The Fuck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0",  "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License",  "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"]},

    {name: 'title',
    message: 'What is the title of this project or application?',
    type: 'input'},

    {name: 'description',
    message: 'What does this project/application do?',
    type: 'input'},

    {name: 'installation',
    message: 'How do I install this application/project?',
    type: 'input'},

    {name: 'usage',
    message: 'How do I use this application?',
    type: 'input'},

    {name: 'contributing',
    message: 'Who are the contributors to this project?',
    type: 'input'},
    {name: 'testing',
    message: 'How would I test this project?',
    type: 'input'},

    {name: 'username',
    message: 'What is your Github username?',
    type: 'input'},

    {name: 'email',
    message: 'What is your e-mail?',
    type: 'input'},

    {name: 'fileName',
    message: 'What do you want to call this readme file?',
    type: 'input'},
])};