// Import the mysql2 library
const mysql = require('mysql2');

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost', // The hostname of the database server
  user: 'root', // The MySQL user to authenticate as
  password: 'icudying', // The password of that MySQL user
  database: 'vault_db' // The name of the database to use for this connection
}, (err) => {
  // If there is an error, throw it
  if (err) throw err;
  // Otherwise, log that the connection was successful
  console.log('Connected to the database.');
});

// Export the database connection for use in other parts of the application
module.exports = db;
