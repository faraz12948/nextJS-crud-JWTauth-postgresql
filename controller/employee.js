import { pool } from '../config/db'
const getAllEmployee = async (req, res) => {

    let data = await pool.query('SELECT * FROM employees');
    res.send(data);
}
const postEmployee = async (req, res) => {
    try {
        const query =
            "INSERT INTO employees(firstname,lastname) VALUES ($1,$2) RETURNING *";
        const values = [req.body.firstname, req.body.lastname];
        let data = await pool.query(query, values);
        res.status(200).send(data);
    } catch (err) {
        res.status(500).json(err);
    }
}
const putEmployee = async (req, res) => {
    try {
        const query =
            "UPDATE employees SET firstname = $1, lastname = $2 WHERE id = $3 RETURNING *";
        const values = [req.body.firstname, req.body.lastname, req.body.id];
        let data = await pool.query(query, values);
        res.status(200).send(data);
    } catch (err) {
        res.status(500).json(err);
    }
}
const getEmployeeById = async (req, res) => {
    try {
        const query = "SELECT * FROM employees WHERE id = $1";
        const values = [req.query.id];
        let data = await pool.query(query, values);
        res.status(200).send(data);
    } catch (err) {
        res.status(500).json(err);
    }
}
const deleteEmployee = async (req, res) => {
    try {
        const query = "DELETE FROM employees WHERE id = $1";
        const values = [req.query.id];
        let data = await pool.query(query, values);
        res.status(200).send(data);
    } catch (err) {
        res.status(500).json(err);
    }
}
export { getAllEmployee, postEmployee, getEmployeeById, deleteEmployee, putEmployee };