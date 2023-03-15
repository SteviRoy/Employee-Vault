// Import the mysql2 library and the connection to the database
const mysql = require('mysql2');
const connection = require('../db/connection');

// Function to retrieve all departments from the database
function getAllDepartments() {
  return connection.promise().query('SELECT * FROM department');
}

// Function to retrieve all roles from the database
function getAllRoles() {
  return connection.promise().query('SELECT * FROM role');
}

// Function to retrieve all employees from the database
function getAllEmployees() {
  return connection.promise().query('SELECT * FROM employee');
}

// Function to add a new department to the database
function addDepartment(name) {
  return connection.promise().query('INSERT INTO department SET ?', { name });
}

// Function to add a new role to the database
function addRole(title, salary, departmentId) {
  return connection.promise().query('INSERT INTO role SET ?', { title, salary, department_id: departmentId });
}

// Function to add a new employee to the database
function addEmployee(firstName, lastName, roleId, managerId) {
  return connection.promise().query('INSERT INTO employee SET ?', { first_name: firstName, last_name: lastName, role_id: roleId, manager_id: managerId });
}

// Function to update an employee's role in the database
function updateEmployeeRole(employeeId, roleId) {
  return connection.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
}

// Export all of the functions for use in other parts of the application
module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
};
