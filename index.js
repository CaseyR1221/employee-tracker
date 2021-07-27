const inquirer = require("inquirer");
const db = require("./db/dbQueries");

const init = () => {
  console.log("Welcome to the Employee Tracker!");
  menu();
};