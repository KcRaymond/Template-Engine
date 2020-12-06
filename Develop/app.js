const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


//create variable to store input in array
let employees = [];

//Creates a Manager profile from user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your Manager?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is the ID number for your Manager?",
      name: "managerId",
    },
    {
      type: "input",
      message: "What is the email for your Manager?",
      name: "managerEmail",
      default: () => {},
          validate: function (email) {
  
              valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  
              if (valid) {
                  return true;
              } else {
                  console.log("  > Please enter a valid email...")
                  return false;}
    },
    },
    {
      type: "input",
      message: "What is the office number for your Manager?",
      name: "managerOfficeNumber",
      default: "number",
    },
  ])
  .then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOfficeNumber
    );
    employees.push(manager);
    createTeam();
  });


