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

