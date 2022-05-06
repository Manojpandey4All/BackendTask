const { response } = require('express');
const express=require('express');
const verifyToken=require('../utils/verifytoken');
const route= express.Router();
const usercontroller=require('../controller/usercontroller')

route.post('/home',verifyToken.tokencheck,(request,response)=>{

});

module.exports=route;
