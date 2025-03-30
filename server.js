const express = require('express');
const cors = require('cors');
const app = express();

const taskRoutes = require('./routes/Taskr');
const userRoutes = require('./routes/userR');

app.use(cors());
app.use(express.json());
 
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);
 

app.get('/', (request, response) => {
  res.send('task_management_test');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port `, PORT);
});