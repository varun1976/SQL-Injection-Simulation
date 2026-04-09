const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection (Update these credentials based on your SQL Workbench)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Default username for MySQL Workbench
    password: 'Root@1234',      // Enter your MySQL root password here
    database: 'auth_demo' // The database from the schema.sql file
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ', err.stack);
        console.log('Ensure MySQL is running and the database "auth_demo" is created via SQL Workbench.');
        return;
    }
    console.log('Connected to MySQL database!');
});

// Simple Login Endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Please provide username and password' });
    }

    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Login query error:', err);
            return res.status(500).json({ error: 'Database error: ' + err.message });
        }

        if (results.length > 0) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ error: 'Wrong credentials' });
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
