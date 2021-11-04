// Created function to generate Markdown for README file
function generateMarkdown(data) {
  console.log(data);
    return`
    
## **${data.title}**

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
![icons8-support-96](https://user-images.githubusercontent.com/86095070/140413027-0b255eb6-d5b2-48b8-83e8-4de45a1f15b3.png) To install the necessary dependencies, run the following command:
${data.installation}

## **Usage**
![icons8-services-96](https://user-images.githubusercontent.com/86095070/140413028-28f6d599-b123-41e3-8ca5-25fe4b2b7805.png) ${data.usage}

## **License** 
This project is licensed under the ${data.license} license.

## **Contributing**
![icons8-search-96](https://user-images.githubusercontent.com/86095070/140413030-e0a58b78-e25e-47c4-ad69-028482a3dd90.png) ${data.contribution}

## **Tests**
To run tests, run the following command:
${data.tests}

## **Questions**
If you have any questions about this repo, open an issue or contact me directly at ![icons8-gmail-96](https://user-images.githubusercontent.com/86095070/140413032-8279b840-208c-4826-b031-3524102d39e6.png) [${data.email}](mailto:${data.email}). You can find more of my work at [${data.username}](https://www.github.com/${data.username}).
  `;
}

module.exports = generateMarkdown;