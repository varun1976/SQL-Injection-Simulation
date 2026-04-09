CREATE DATABASE IF NOT EXISTS auth_demo;
USE auth_demo;

CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL
);
INSERT INTO users (username, password) VALUES ('admin', '1234');
INSERT INTO users (username, password) VALUES ('user1', 'password');
INSERT INTO users (username, password) VALUES ('john', 'john123');
INSERT INTO users (username, password) VALUES ('alice', 'alice@123');
INSERT INTO users (username, password) VALUES ('test', 'test123');
