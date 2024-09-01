const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create the User model based on the UserSchema
const User = mongoose.model('User', UserSchema);

// Optional: Create indexes for the email field for performance (Mongoose does this automatically on unique fields)
User.createIndexes();

module.exports = User;
