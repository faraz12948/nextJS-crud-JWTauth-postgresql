const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const saltRounds = 10;
import { pool } from '../config/db'

const createUser = async (req, res) => {
    try {
        bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
            const query = "INSERT INTO users(firstname,lastname,email,password) VALUES ($1,$2,$3,$4) RETURNING *";
            const values = [req.body.firstname, req.body.lastname, req.body.email, hash];
            let data = await pool.query(query, values);
            res.status(200).send(data);

        })

    } catch (err) {
        res.status(500).json(err);
    }
}
const getUser = async (req, res) => {
    try {

        const query = "SELECT * FROM users WHERE email = $1";
        const values = [req.body.email];
        let person = await pool.query(query, values);

        console.log(person.rows[0].password);
        bcrypt.compare(req.body.password, person.rows[0].password, function (err, result) {
            // console.log(result);
            if (!err && result) {
                // console.log(result);
                const claims = { sub: person.id, username: person.firstname, email: person.email };
                const jwtToken = jwt.sign(claims, 'shhhhh', { expiresIn: '1h' });
                res.status(200).json({ authToken: jwtToken });
            }
        });



    } catch (err) {
        res.status(500).json(err);
    }
}

export { createUser, getUser };