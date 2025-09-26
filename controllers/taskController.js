const db = require('../database/connection');

// Get all tasks
exports.getAllTasks = function(req, res) {
    db.all('SELECT * FROM tasks', [], function(err, tasks) {
        if (err) return res.json({ error: 'Could not get tasks' });
        res.json(tasks);
    });
};

// Get one task by ID
exports.getTaskById = function(req, res) {
    const id = req.params.id;
    
    db.get('SELECT * FROM tasks WHERE id = ?', [id], function(err, task) {
        if (err) return res.json({ error: 'Could not find task' });
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.json(task);
    });
};

// Create new task
exports.createTask = function(req, res) {
    const { title, description } = req.body;
    
    db.run('INSERT INTO tasks (title, description) VALUES (?, ?)', 
        [title, description], 
        function(err) {
            if (err) return res.json({ error: 'Could not save task' });
            res.json({ id: this.lastID, message: 'Task created' });
        }
    );
};

// Update existing task
exports.updateTask = function(req, res) {
    const id = req.params.id;
    const { title, description, status } = req.body;
    
    db.run('UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?',
        [title, description, status, id],
        function(err) {
            if (err) return res.json({ error: 'Could not update task' });
            res.json({ success: true, message: 'Task updated' });
        }
    );
};

// Delete task
exports.deleteTask = function(req, res) {
    const id = req.params.id;
    
    db.run('DELETE FROM tasks WHERE id = ?', [id], function(err) {
        if (err) return res.json({ error: 'Could not delete task' });
        res.json({ success: true, message: 'Task deleted' });
    });
};