  # 🔐 Auth Demo (Node.js + MySQL + SQL Injection Demo)

  This project is a demonstration of a basic authentication system using Node.js (Express) and MySQL, along with a frontend login form to simulate SQL Injection attacks.

  ⚠️ This project is intentionally vulnerable and is meant strictly for educational purposes.

  ## 🚀 Features

  - Login API with MySQL backend
  - Frontend login form for testing
  - Demonstrates SQL Injection vulnerability
  - Express server with JSON handling
  - CORS enabled

  ## 🛠️ Tech Stack

  - Backend: Node.js, Express.js  
  - Frontend: React, Tailwind  
  - Database: MySQL

  ## ⚙️ Setup Instructions

  ### 1. Clone the Repository

  git clone https://github.com/varun1976/SQL-Injection-Simulation
  
  cd SQL-Injection-Simulation

  ### 2. Install Dependencies

  npm install

  ### 3. Setup MySQL Database

  1. Open MySQL Workbench
  2. Create database:

     CREATE DATABASE auth_demo;

  3. Run schema.sql to create tables (e.g., users table)

  ### 4. Configure Database Connection

  Update credentials in server.js:

  const db = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Root@1234',
      database: 'auth_demo'
  });

  ### 5. Start Backend Server

  node server.js

  Server runs at:
  http://localhost:3000

  ### 6. Run Frontend (Client)

  - cd client
  - npm run dev

  ## 💻 SQL Injection Demo

  The backend uses a vulnerable query:

  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

  You can test SQL Injection using the frontend form:

  You can also find some malicious queries in the "mal-SQL.txt" file

  Example Attack Inputs:

  Username:
  anything

  Password:
  ' OR '1'='1

  ➜ This bypasses authentication because the query becomes:

  SELECT * FROM users WHERE username = 'anything' AND password = '' OR '1'='1';

  Since '1'='1' is always true, login succeeds without valid credentials.

  ## ⚠️ Security Issues Demonstrated

  - SQL Injection vulnerability
  - Plain text password storage
  - No input validation
  - No authentication tokens

  ## 🎯 Purpose of Project

  This project helps in understanding:

  - How SQL Injection works
  - Why insecure queries are dangerous
  - How frontend can be used to test vulnerabilities
  - Basics of securing authentication systems
