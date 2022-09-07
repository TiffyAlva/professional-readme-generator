// TODO: Include packages needed for this application
const inquirer  = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const fs = require("fs") 


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
        
        
    },

    {
        type: "input",
        name: "description",
        message: "Describe your project in a short sentences.",
        

    },

    
    {
        type: "input",
        name: "installation",
        message: "Describe the installation instructions.",
        

        
    },

    {
        type: "input",
        name: "usage",
        message: "What is the usage?",

    },

    

    {
        type: "list",
        name: "license",
        message: "What license are using for your project?",
        choices: ["Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License"
        ]
    },

    {
        type: "input",
        name: "tests",
        message: "Provide test instructions for application."
        
    },

    {
        type: "input",
        name: "contribution",
        message: "Explain how another developer can contribute to the project."
        
    },

    {
        type: "input",
        name: "github",
        message: "Provide your GitHub username."
        
    },

    {
      type: "input",
      name: "repo",
      message: "What is the URL of the GitHub repository?"
      

    },

    

    {
        type: "input",
        name: "email",
        message: "What is your email?"
        
    }
   

      
        
        
        
];

// TODO: Create a function to write README file    
function writeToFile(fileName, data) {}

//console.log "README.md file is completed!"     *(LINE 104)

// TODO: Create a function to initialize app   *(Answers)
function init() {
    inquirer.prompt(questions)
    .then(function(answers){
        console.log(answers)
        var markdown = generateMarkdown(answers)
        console.log(markdown)
        fs.writeFile("result.md", markdown, function(){
            console.log("Sucessfully created the README!")
        } )
    })
}

// Function call to initialize app 
init();