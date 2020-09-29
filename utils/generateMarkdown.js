// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description

${data.description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution](#contribution)
4. [License](#license)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution

${data.contribution}

## License

${data.License}

## Tests

${data.tests}

## Questions

GitHub: ${data.github}
Email: ${data.email}
`;
}
  
module.exports = generateMarkdown;