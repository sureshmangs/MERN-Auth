const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log('Successfully connected to DB');
    } catch (err) {
        console.error('Error connecting to the DB', err.message);
    }
};

module.exports = connectDB;