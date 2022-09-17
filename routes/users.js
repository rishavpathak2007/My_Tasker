const mongoose = require('mongoose'); 

mongoose.connect("mongodb+srv://Rishav:Rishav@cluster0.8eav44q.mongodb.net/test");

let data = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}); 

module.exports = mongoose.model("Schema" , data); 