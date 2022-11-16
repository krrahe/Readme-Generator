//consts for the required modules
const inquirer = require("inquirer");
const fs = require("fs");
//outline for the questions to be inserted into the readme 
const generateREADME = ({ title, description, license, team, github }) =>
  `<h1 align="center">${title} ❗</h1>
  
![badge](https://img.shields.io/badge/license-${license}-brightgreen)<br />
## Description
🔍 ${description}
## Table of Contents
- [Description](#description)
- [License](#license)
- [Contributing](#Team)
![badge](https://img.shields.io/badge/license-${license}-brightgreen)
<br />
This application is covered by the ${license} license. 
## Team
👪
Everyone who participated with this project!
 ${team}
<br />
Find me on GitHub: [${github}](https://github.com/${github})<br />
`;
//inquirer prompts for the readme
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of this project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the scope of this project?",
    },

    {
      type: "list",
      name: "license",
      message: "Which license was used for this project?",
      choices: ["MIT", "Apache", "GPL", "BSD", "Open", "None"],
    },
    {
      type: "input",
      name: "team",
      message: "Who was involved in the development of this project?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
  ])
  .then((answers) => {
    const readMePageContent = generateREADME(answers);
//actually creates the readme file
    fs.writeFile("README.md", readMePageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });
