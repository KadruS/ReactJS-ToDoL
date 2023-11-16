const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    user: process.env.DBUSERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    // user: 'postgres',
    // password: 'XXcvf123',
    // host: 'localhost',
    // port: 2309,
    database: 'todoapp'
})

module.exports = pool