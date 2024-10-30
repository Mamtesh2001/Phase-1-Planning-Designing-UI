const db = require('../database/connection');

exports.getAllClients = (req, res) => {
  db.query('SELECT * FROM clients', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.createClient = (req, res) => {
  const { name, contact } = req.body;
  db.query('INSERT INTO clients (name, contact) VALUES (?, ?)', [name, contact], (err) => {
    if (err) throw err;
    res.status(201).json({ message: 'Client created' });
  });
};
