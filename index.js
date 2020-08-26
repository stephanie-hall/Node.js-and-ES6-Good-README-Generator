const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "Give the project a title."
    },
    
    {
        type: "input",
        name: "description",
        message: "Describe the project."
    },

    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your Email?"
    },

    {
        type: "input",
        name: "installation",
        message: "What did you do?"
    },

    {
        type: "input",
        name: "usage",
        message: "What is your code designed to be used for?"
    },

    {
        type: "input",
        name: "contribution",
        message: "Who all contrubuted to this project?"
    },

    {
        type: "input",
        name: "tests",
        message: "What tests did you perform?"
    },

    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },

    {
        type: "input",
        name: "questions",
        message: "What are some questions you have?"
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err, data){ });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(data){
        writeToFile("readMe.md", data);
    });

}

// function call to initialize program
init();