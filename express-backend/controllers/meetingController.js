const db = require('../config/db');

exports.scheduleMeeting = (req, res) => {
    const meeting = { client_id: req.body.clientId, meeting_date: req.body.date, notes: req.body.notes };
    const sql = 'INSERT INTO meetings SET ?';
    db.query(sql, meeting, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};
