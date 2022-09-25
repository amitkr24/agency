const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    //name of the user
    name: {
        type: String,
        required: true
    },

    //email id of the user
    email: {
        type: String,
        unique: true,
        required: true
    },

    //password for the user's account
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema); //modelling the schema
module.exports = User;