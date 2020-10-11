const fs = require("fs")

// functions for each question topic
async function projectTitle(projectTitle) {
  const titleString = projectTitle;
  const output = `# ${titleString} 
  \n`;
  return output
}

async function projectSummary(projectSummary) {
  const summaryString = projectSummary;
  const output = `### ${summaryString} 
  \n`;
  return output
}

async function tableOfContents() {
  const output = `
  ## Table of Contents:
  1. Install
  2. Testing
  3. Credits
  4. License
  \n`
  return output
}

async function installation(installation) {
  const installString = installation;
  const output = `
  ### Installation: ${installString} 
  \n`
  return output
} 

async function testing(testing) {
  const testingString = testing;
  const output = `
  ### Testing: ${testingString} 
  \n`
  return output
}

async function githubLink(githubLink) {
  const gitLinkString = githubLink;
  const output = `
  ### GitHub Repository: ${gitLinkString} 
  \n`
  return output 
}

async function deployedLink(deployedLink) {
  const deployedString = deployedLink;
  const output = `
  ### Github Deployment: ${deployedString} 
  \n`
  return output
}

async function credits(credits) {
  const creditsString = credits;
  const output = `
  ### Credits: ${creditsString} \n`
  return output
}

// export for use via index.js
module.exports = {
  projectTitle: projectTitle,
  projectSummary: projectSummary,
  tableOfContents: tableOfContents, 
  installation: installation,
  testing: testing,
  githubLink: githubLink,
  deployedLink: deployedLink,
  credits: credits,

}

