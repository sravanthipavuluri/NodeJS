const mongoose = require('mongoose');
let Schema = mongoose.Schema;
 
let user = new Schema({
    username: String,
    password: {type: String, required: true},
    email : {type:String, required:true, unique:true},
    mobile: {type: Number, unique: true}
});

let user = mongoose.model('user', user);

module.exports = user;