const {Schema, default: mongoose, Mongoose}=require('mongoose');
const  connect= require('../connect');
const usermodel=new Schema({
    Name:{type:Schema.Types.String},
    Username:{type:Schema.Types.String,unique:true},
    Email:{type:Schema.Types.String,unique:true},
    Password:{type:Schema.Types.String},
    logintime:{type:Schema.Types.Date,default:new Date().toString()},

})
const userschema=connect.model('users',usermodel);
module.exports= userschema;