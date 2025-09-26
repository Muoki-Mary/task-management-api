const express = require('express');
const cors = require('cors');
const db = require('./database/connection');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ 
    message: 'Task Management API',
    version: '1.0.0',
    status: 'running'
  });
});

// health endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok',
    time: new Date().toISOString()
  });
});

// API routes
app.use('/api/tasks', taskRoutes);

app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;