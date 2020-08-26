// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.projectTitle} \n
    ## Description
    ${data.description} \n
    ## Table of Contents \n
    1. [Installation](#installation) \n
    2. [Usage](#usage) \n
    3. [Contribution](#contribution) \n
    4. [License](#license)
    5. [Tests](#tests) \n
    6. [Questions](#questions) \n
    ## Installation \n
    ${data.installation} \n
    ## Usage \n
    ${data.usage} \n
    ## Contribution \n
    ${data.contribution} \n
    ## Tests \n
    ${data.tests} \n
    ## Questions \n
    GitHub: ${data.github} \n
    Email: ${data.email} 
  `;
}
  
module.exports = generateMarkdown;