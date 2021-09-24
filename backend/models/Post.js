const mongoose = require('mongoose');

const postSchema = mongoose.Schema({  /// postSchema is the schema for the inputs that you user gonna input in the text field named Input Values
    user_Id:{
        type:String,
        
    },
    input_values: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);