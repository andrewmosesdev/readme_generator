const fs = require("fs")

// functions for each question topic
async function projectTitle(projectTitle) {
  const titleString = projectTitle;
  const output = `# ${titleString} 
  \n
  `;
  return output
}

async function projectSummary(projectSummary) {
  const summaryString = projectSummary;
  const output = `## ${summaryString} 
  \n
  `;
  return output
}

async function tableOfContents() {
  const output = `
  ## Table of Contents:
  * [Installation](#Installation) 
  * [Testing](#Testing)
  * [Usage](#Usage)
  * [GitHub](#Repository)
  * [Email](#Email)
  * [Collaborators](#Collaborators)
  * [Credits](#Credits)
  * [License](#License)
  `
  return output
}

async function installation(installation) {
  const installString = installation;
  const output = `
  ## Installation: ${installString} 
  \n
  `
  return output
} 

async function testing(testing) {
  const testingString = testing;
  const output = `
  ## Testing: ${testingString} 
  \n
  `
  return output
}

async function usage(usage) {
  const usageString = usage;
  const output = `
  ## Usage: ${usageString}
  \n
  `
  return output
}

async function githubLink(githubLink) {
  const gitLinkString = githubLink;
  const output = `
  ## Repository: ${gitLinkString} 
  \n
  `
  return output 
}

async function deployedLink(deployedLink) {
  const deployedString = deployedLink;
  const output = `
  ## Deployment: ${deployedString} 
  \n
  `
  return output
}

async function email(email) {
  const emailString = email;
  const output = `
  ## Email ${emailString}
  \n
  `
  return output
}

async function collaborators(collaborators) {
  const collabString = collaborators;
  const output = `
  ## Collaborators: ${collabString}
  \n
  `
  return output
}

async function credits(credits) {
  const creditsString = credits;
  const output = `
  ## Credits: ${creditsString} 
  \n
  `
  return output
}

// export for use via index.js
module.exports = {
  projectTitle: projectTitle,
  projectSummary: projectSummary,
  tableOfContents: tableOfContents, 
  installation: installation,
  testing: testing,
  usage: usage,
  githubLink: githubLink,
  deployedLink: deployedLink,
  email: email,
  collaborators: collaborators,
  credits: credits,

}

