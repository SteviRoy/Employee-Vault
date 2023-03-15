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
// Function to retrieve all departments from the database and display them in a table
function viewDepartments() {
  getAllDepartments()
    .then(([rows]) => {
      console.table(rows);
      // Call startApp() to prompt the user with the main menu again
      startApp();
    })
    .catch(err => console.log(err));
}

// Function to retrieve all roles from the database and display them in a table
function viewRoles() {
  getAllRoles()
    .then(([rows]) => {
      console.table(rows);
      // Call startApp() to prompt the user with the main menu again
      startApp();
    })
    .catch(err => console.log(err));
}

// Function to retrieve all employees from the database and display them in a table
function viewEmployees() {
  getAllEmployees()
    .then(([rows]) => {
      console.table(rows);
      // Call startApp() to prompt the user with the main menu again
      startApp();
    })
    .catch(err => console.log(err));
}
// Function to prompt the user for a new department name and add it to the database
function addDepartmentPrompt() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the department?'
      }
    ])
    .then(({ name }) => {
      // Call the addDepartment() function from the query module to add the new department to the database
      addDepartment(name)
        .then(() => {
          console.log(`Added ${name} department to the database`);
          // Call startApp() to prompt the user with the main menu again
          startApp();
        })
        .catch(err => console.log(err));
    });
}

// Function to prompt the user for a new role and add it to the database
function addRolePrompt() {
  // Retrieve all departments from the database
  getAllDepartments()
    .then(([rows]) => {
      // Create an array of department choices for the user to select from
      const choices = rows.map(row => ({ name: row.name, value: row.id }));
      // Prompt the user for a new role name, salary, and department
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'title',
            message: 'What is the name of the role?'
          },
          {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for the role?'
          },
          {
            type: 'list',
            name: 'departmentId',
            message: 'Which department does the role belong to?',
            choices: choices
          }
        ])
        .then(({ title, salary, departmentId }) => {
          // Call the addRole() function from the query module to add the new role to the database
          addRole(title, salary, departmentId)
            .then(() => {
              console.log(`Added ${title} role to the database`);
              // Call startApp() to prompt the user with the main menu again
              startApp();
            })
            .catch(err => console.log(err));
        });
    })
    .catch(err => console.log(err));
}

// Function to prompt the user for a new employee and add it to the database
function addEmployeePrompt() {
  // Retrieve all roles and employees from the database simultaneously using Promise.all()
  Promise.all([
    getAllRoles(),
    getAllEmployees()
  ])
    .then(([roles, employees]) => {
      // Create an array of role choices for the user to select from
      const roleChoices = roles[0].map(row => ({ name: row.title, value: row.id }));
      // Create an array of manager choices for the user to select from, including an option for "None"
      const managerChoices = employees[0].map(row => ({ name: `${row.first_name} ${row.last_name}`, value: row.id }));
      managerChoices.unshift({ name: 'None', value: null });
      // Prompt the user for a new employee's first name, last name, role, and manager
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'firstName',
            message: "What is the employee's first name?"
          },
          {
            type: 'input',
            name: 'lastName',
            message: "What is the employee's last name?"
          },
          {
            type: 'list',
            name: 'roleId',
            message: "What is the employee's role?",
            choices: roleChoices
          },
          {
            type: 'list',
            name: 'managerId',
            message: "Who is the employee's manager?",
            choices: managerChoices
          }
        ])
        .then(({ firstName, lastName, roleId, managerId }) => {
          // Call the addEmployee() function from the query module to add the new employee to the database
          addEmployee(firstName, lastName, roleId, managerId)
            .then(() => {
              console.log(`Added ${firstName} ${lastName} to the database`);
              // Call startApp() to prompt the user with the main menu again
              startApp();
            })
            .catch(err => console.log(err));
        });
    })
    .catch(err => console.log(err));
}
