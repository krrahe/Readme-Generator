// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of this project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the scope of this project?',
        },
        {
            type: 'input',
            name: 'Codes',
            message: 'Which coding languages were used for this project?',
        }
    ])
    .then((answers) => {
        const README = generateREADME(answers);

        fs.writeFile('README.md', README, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });
        // TODO: Create a function to write README file
        function writeToFile(fileName, data) { }

        // TODO: Create a function to initialize app
        function init() { }

        // Function call to initialize app
        init();
