const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'user must have a name']
    },

    email: {
        type: String,
        unique: true,
        required: [true, 'user must have an email'],
        lowercase: true,
        validate: [validator.isEmail, 'Please provide valid email']
    },

    phoneNumber: {
        type: String,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 8
    },

    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        
        validate: {     //custom validator
            validator: function(el){
                return el === this.password;
            }
        },
        message: "Password must be the same"
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'

    }

});

UserSchema.pre('save', async function(next){        //kinda middleware run before db saves data
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;   //not store on our database
});

const User = mongoose.model('User', UserSchema);


module.exports = User;