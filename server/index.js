const express = require('express');
const morgan = require('morgan');
const connectDB = require('./connectDB.js');

const app = express();

// Middlewares

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// To parse the incoming requests with JSON payloads
app.use(express.json());

// HTTP request logger middleware 
app.use(morgan('tiny'));

// Connect to Database
connectDB();

// Routes
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})