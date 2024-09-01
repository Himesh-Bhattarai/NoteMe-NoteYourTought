const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/.env' });

const connectToMongoose = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI); // Removed deprecated options
    console.log('Connected to MongoDB Successfully');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

module.exports = connectToMongoose;
