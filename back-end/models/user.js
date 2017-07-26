var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  role :{
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type:String,
    required: true,
    unique:true
  },
  password:{
    type:String,
    required:true
  }
},{collection:'user'});

mongoose.model('User', userSchema);
