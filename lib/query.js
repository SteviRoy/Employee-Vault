const mysql = require('mysql2');
const connection = require('../db/connection');

function getAllDepartments() {
  return connection.promise().query('SELECT * FROM department');
}

function getAllRoles() {
  return connection.promise().query('SELECT * FROM role');
}

function getAllEmployees() {
  return connection.promise().query('SELECT * FROM employee');
}

function addDepartment(name) {
  return connection.promise().query('INSERT INTO department SET ?', { name });
}

function addRole(title, salary, departmentId) {
  return connection.promise().query('INSERT INTO role SET ?', { title, salary, department_id: departmentId });
}

function addEmployee(firstName, lastName, roleId, managerId) {
  return connection.promise().query('INSERT INTO employee SET ?', { first_name: firstName, last_name: lastName, role_id: roleId, manager_id: managerId });
}

function updateEmployeeRole(employeeId, roleId) {
  return connection.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
}

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
};