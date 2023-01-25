// const { Client } = require('pg')
// const client = new Client({
//     host: 'localhost',
//     user: 'faraz',
//     password: 'faraz12948fab',
//     port: '5432',
//     database: 'employee'
// })
// await client.connect()
const { Pool } = require('pg');
var pool = new Pool({
    host: 'localhost',
    user: 'faraz',
    password: 'faraz12948fab',
    port: '5432',
    database: 'employee'
});



export { pool };