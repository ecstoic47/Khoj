const mongoose = require('mongoose');

const userSchema = mongoose.Schema({ ///Schema for the users for authentication 
    user_id:{
        type:Number,
        required:true,
        unique:true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },

   
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);