const inquirer = require("inquirer");
const db = require("./db/dbQueries");

const init = () => {
  console.log("Employee Tracker");
  menu();
};