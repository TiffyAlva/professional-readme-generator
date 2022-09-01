// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
        //if , else, console.log "Enter your project name."
        
    }

    {
        type: "input",
        name: "description",
        message: "Describe your project in a short sentences.",
        //if, else, console.log "Enter installation intructions for your application"

    }

    {
        type: "input",
        name: "installation",
        message: "Describe the installation instructions.",
        //if, else, console.log "Enter installation for your application"

        
    }

    

    {
        type: "list",
        name: "license",
        message: "What license are using for your project?"
        //choices:
    }

    {
        type: "input",
        name: "tests",
        message: "Provide test instructions for application."
        //if, else, console.log "Enter instuctions."
    }

    {
        type: "input",
        name: "contribution",
        message: "Explain how another developer can contribute to the project."
        //if, else, console.log "Describe contribution to your project."
    }

    {
        type: "input",
        name: "github",
        message: "Provide your GitHub username."
        //if, else, console.log "Enter your GitHub username."
    }

    {
      type: "input",
      name: "repo",
      message: "What is the URL of the GitHub repository?"
      //if, else, console.log "Enter your GitHub repository."

    }

    {
        type: "input",
        name: "author",
        message: "What is your full name?"

        

    }

    {
        type: "input",
        name: "email",
        message: What is your email?
        //if, else, console.log "Enter your contact email."
    }

    {
        type: "input",
        name: "userName"
        message: "What is your GitHub username?"
    }


   

      
        
        
        
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();