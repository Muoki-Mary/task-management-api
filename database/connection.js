const sqlite3 = require('sqlite3');

// create database
const db = new sqlite3.Database('tasks.db', (err) => {
  if (err) {
    console.log('DB error:', err.message);
  } else {
    console.log('Database connected');
    createTable();
  }
});

// create table for tasks
function createTable() {
  db.run(`CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'pending'
  )`, (err) => {
    if (err) {
      console.error('Failed to create table:', err.message);
    } else {
      console.log('Table ready');
    }
  });
}

module.exports = db;