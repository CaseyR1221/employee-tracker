const inquirer = require("inquirer");
const db = require("./db/dbQueries");

const init = () => {
  console.log("Employee Tracker");
  menu();
};

menu = () => {
  console.log("\n");
  // these..are the questions
  inquirer
    .prompt(menuQuestions)
    .then((answers) => {
      if (answers.menu == "View All Departments") {
        viewDepartments();
      } else if (answers.menu == "View All Roles") {
        viewRoles();
      } else if (answers.menu == "View All Employees") {
        viewEmployees();
      } else if (answers.menu == "Add a Department") {
        inquirer
          .prompt({
            type: "input",
            message: "What is the name of the department you would like to add?",
            name: "dept",
            default: "1001",
          })
          .then((answer) => {
            addDepartment(answer.dept);
          });
      } else if (answers.menu == "Add a Role") {

      } else if (answers.menu == "Add an Employee") {

      } else if (answers.menu == "Update Employee Role") {

      } else {
        process.exit();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const menuQuestions = [
  {
    type: "list",
    name: "menu",
    message: "What would you like to do next?",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add a Department",
      "Add a Role",
      "Add an Employee",
      "Update Employee Role",
      "Exit",
    ],
  },
];

init();

async function viewDepartments() {
  let departments = await db.findAllDepartments();
  console.log("\n");
  console.table(departments);
  menu();
}

async function viewRoles() {
  let roles = await db.findAllRoles();
  console.log("\n");
  console.table(roles);
  menu();
}

async function viewEmployees() {
  let employees = await db.findAllEmployees();
  console.log("\n");
  console.table(employees);
  menu();
}

async function addDepartment(newDept) {
  await db.addNewDepartment(newDept);
}