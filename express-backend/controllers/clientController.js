const db = require('../config/db');

exports.createClient = (req, res) => {
    const client = { name: req.body.name, email: req.body.email, phone: req.body.phone };
    const sql = 'INSERT INTO clients SET ?';
    db.query(sql, client, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};
