const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
     type: String,
     required: [true, 'Please enter first name'],
     trim: true,
     lowercase: true
    },
    firstname:{
     type: String,
     required: [true, 'Please enter first name'],
     trim: true,
     lowercase: true
    },
    lastname:{
     type: String,
     alias: 'surname',
     required: true,
     trim: true,
     lowercase: true
    },
    password:{
     type: String,
     required: true
    },
    email:{
     type: String,
     required: true,
     unique: [true, "Duplicate Email Not allowed"],
     trim: true,
     uppercase: true,
     validate: function(value) {
        var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailRegex.test(value);
       }
    },
    type:{
     type: String,
     required: true
    }
})