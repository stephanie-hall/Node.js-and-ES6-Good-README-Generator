const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of this project?"
    },
    
    {
        type: "input",
        name: "description",
        message: "Describe your project."
    },

    {
        type: "input",
        name: "installation",
        message: "How did you install your project?"
    },

    {
        type: "input",
        name: "usage",
        message: "What is your code designed to be used for?"
    },

    {
        type: "input",
        name: "contribution",
        message: "Who contrubuted to this project?"
    },

    {
        type: "input",
        name: "tests",
        message: "What tests did you perform?"
    },

    {
        type: "input",
        name: "license",
        message: "What kind of license should your project have?"
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

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err, data){ });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(data){
        writeToFile("examplereadMe.md", data);
    });

}

// function call to initialize program
init();