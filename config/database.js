const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,

    host: process.env.REMOTE_DB_HOST, // Use remote DB host
    user: process.env.REMOTE_DB_USER, // Use remote DB user
    password: process.env.REMOTE_DB_PASSWORD, // Use remote DB password
    database: process.env.REMOTE_DB_NAME, // Use remote DB name
    port: process.env.REMOTE_DB_PORT // Use remote DB port (optional, default is 3306)
});

module.exports = pool;
