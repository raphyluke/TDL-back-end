const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json());
app.use(cors());

app.use('/remindme/api/users', require('./routes/user.route'));
app.use('/remindme/api/categories', require('./routes/category.route'));
app.use('/remindme/api/tasks', require('./routes/task.route'));

app.get('/remindme', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => console.log('Server is running on port 3000'));