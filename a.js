const mysql = require('mysql2');
// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost', // Replace with your database host
  user: 'root', // Replace with your database username
  password: 'swaas@123', // Replace with your database password
  database: 'customers' // Replace with your database name
});
// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id', db.threadId);
});
// Perform a query
db.query('SELECT * FROM customers', (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error.stack);
    return;
  }
  console.log('Query results:', results);
});
// Close the connection
db.end();
