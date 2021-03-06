// Created function to generate Markdown for README file
function generateMarkdown(data) {
  console.log(data);
    return`
    
## **${data.title}**

## **Video Walkthrough of Project**



## **Description**
${data.description}

## **Table of Contents**
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## **Installation**
To install this project with necessary dependencies run the following command:
${data.installation}

## **Usage**
 ${data.usage}

## **License** 
This project is licensed under the ${data.license} license.

## **Contributing**
 ${data.contribution}

## **Tests**
To run tests, run the following command:
${data.tests}

## **Questions**
If you have any questions about this repo, open an issue or contact me directly at: [${data.email}](mailto:${data.email}). You can find more of my work at [${data.username}](https://www.github.com/${data.username}).

## **Deployment** 

Github: You can find the deployment link at [${data.username}](https://www.github.com/${data.username}).

`;
}

module.exports = generateMarkdown;