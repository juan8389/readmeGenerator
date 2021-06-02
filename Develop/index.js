

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: "input",
        message: "What is the name of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a description of the project",
        name: "description"
    },
    {
        type: "input",
        message: "What is the installation process?",
        name: "installation"
    },
    {
        type: "input",
        message: "How will this project be used?",
        name: "usage"
    },

    {    
        type: "input",
        message: "What are the contribution guidelines to this project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What is the test process for this project?",
        name: "test"
    },
    {
        type: "list",
        message: "What licenses are required with this project?, (PRESS: up or down arrow to scroll and enter key to select)",
        name: "license",
        choices: ['The MIT license', 'The GPL license', 'Apache license 2.0', 'The GNU license']
    },
    {     
        type: "input",
        message: "What is the github user name?",
        name: "userName"
    },
    {     
        type: "input",
        message: "What is the user email address?",
        name: "Email"
    }
]
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
}

function init() {
    inquirer
        /* Pass your questions in here */
        .prompt(questions)
        .then(answers => {
            writeToFile("proReadme.md", answers)

        });

}
init();
