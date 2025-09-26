const express = require('express');
const router = express.Router();
const db = require('../database/connection');

// get all tasks
router.get('/', function(req, res) {
    db.all('SELECT * FROM tasks', [], function(err, rows) {
        if (err) return res.json({ error: err.message });
        res.json(rows);
    });
});

// get one task
router.get('/:id', function(req, res) {
    db.get('SELECT * FROM tasks WHERE id = ?', [req.params.id], function(err, row) {
        if (err) return res.json({ error: err.message });
        res.json(row);
    });
});

// create task
router.post('/', function(req, res) {
    db.run('INSERT INTO tasks (title, description) VALUES (?, ?)', 
        [req.body.title, req.body.description], 
        function(err) {
            if (err) return res.json({ error: err.message });
            res.json({ id: this.lastID });
        }
    );
});

// update task
router.put('/:id', function(req, res) {
    db.run('UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?',
        [req.body.title, req.body.description, req.body.status, req.params.id],
        function(err) {
            if (err) return res.json({ error: err.message });
            res.json({ ok: true });
        }
    );
});

// delete task
router.delete('/:id', function(req, res) {
    db.run('DELETE FROM tasks WHERE id = ?', [req.params.id], function(err) {
        if (err) return res.json({ error: err.message });
        res.json({ ok: true });
    });
});

module.exports = router;