// Import the inquirer library for prompting the user
const inquirer = require('inquirer');

// Import the query functions from the query module
const {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
} = require('./lib/query');

// Import the Department, Role, and Employee classes
const Department = require('./lib/department');
const Role = require('./lib/role');
const Employee = require('./lib/employee');

// Function to prompt the user with a list of actions to take
function startApp() {
  inquirer
    .prompt(
      {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit'
        ]
      }
    ).then(({ choice }) => {
      // Call the appropriate function based on the user's choice
      switch (choice) {
        case 'View all departments':
          viewDepartments();
          break;
        case 'View all roles':
          viewRoles();
          break;
        case 'View all employees':
          viewEmployees();
          break;
        case 'Add a department':
          addDepartmentPrompt();
          break;
        case 'Add a role':
          addRolePrompt();
          break;
        case 'Add an employee':
          addEmployeePrompt();
          break;
        case 'Update an employee role':
          updateEmployeeRolePrompt();
          break;
        default:
          db.end();
          console.log('Goodbye!');
          process.stdin.resume();
      }
    })
}
