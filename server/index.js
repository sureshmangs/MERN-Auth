const express = require('express');
const connectDB = require('./connectDB.js');

const app = express();


// Connect to Database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})