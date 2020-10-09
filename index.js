// constants for json packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// function to generate the readme
async function generateReadMe() {
  // const questions array to house question inputs
  const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the project title?",
    },
    {
      type: "input",
      name: "summary",
      message: "Give a brief summary of the project",
    },
    {
      type: "input",
      name: "acceptance criteria",
      message: "Add the acceptance criteria",
    },
    {
      type: "input",
      name: "github link",
      message: "What is your GitHub repo url?",
    },
    {
      type: "input",
      name: "github deployed",
      message: "What is your GitHub deployment url?",
    },
    {
      type: "input",
      name: "extra info",
      message: "What additional information should be included in your readme?",
    },
  ];

  // const for answers w/ await
  const answers = await inquirer.prompt(questions);
  // console.log(answers);

  // const to house template literal to dynamically apply to readme
  const dynamicReadMe = `
    `;
  // console.log(dynamReadMe)

  // replace index.html w/ readme file
  await writeFileAsync("index.html", dynamicReadMe);
}

// run function to generate ReadMe
generateReadMe();
