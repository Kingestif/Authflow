const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'user must have a name']
    },

    email: {
        type: String,
        unique: true,
        required: [true, 'user must have an email']
    },

    phoneNumber: {
        type: String,
        unique: true
    }

});

const User = mongoose.model('User', UserSchema);


module.exports = User;