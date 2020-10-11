// required packages and consts
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const appendFile = util.promisify(fs.appendFile);

// inquirer prompts for user interaction
inquirer
  .prompt([
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
      name: "installation",
      message: "How can a user install this project?",
    },
    {
      type: "input",
      name: "test",
      message: "Were any tests run?",
    },
    {
      type: "input",
      name: "githubLink",
      message: "What is your GitHub repo url?",
    },
    {
      type: "input",
      name: "githubDeployed",
      message: "What is your GitHub deployment url?",
    },
    {
      type: "input",
      name: "credits",
      message: "Any credit to give to anyone?",
    },
    {
      type: "list",
      name: "license",
      message: "Which license are you using?",
      choices: ["MIT", "GPL", "BSD-3"],
    },
  ])
    // then initialize answers
  .then((answers) => {
    init(answers);
  })
  .catch((error) => {
    // log errors
    console.log(error);
  });

    // asyncronous function to initialize answers
async function init(answers) {
  try {
    
    // create array to push responses to, then forEach to loop through
    let responseArray = [];
    // console.log(answers);

    // pull responses from questions numerically
    const q1 = await generateMarkdown.projectTitle(answers.title);
    const q2 = await generateMarkdown.projectSummary(answers.summary);
    const q3 = await generateMarkdown.tableOfContents();
    const q4 = await generateMarkdown.installation(answers.installation);
    const q5 = await generateMarkdown.testing(answers.test);
    const q6 = await generateMarkdown.githubLink(answers.githubLink);
    const q7 = await generateMarkdown.deployedLink(answers.githubDeployed)
    const q8 = await generateMarkdown.credits(answers.credits)

    // push responses to an array
    responseArray.push(q1, q2, q3, q4, q5, q6, q7, q8);

    // console.log(responseArray)
   
    // use forEach to loop through new array and append each file syncronously (need appendFileSync, not appendFile otherwise they come out in random order)
    responseArray.forEach((item) => {
      fs.appendFileSync("README.md", item, (err) => {
        if (err) throw err;
      });
    });
  } catch (error) {
    console.log(error);
  }
}
