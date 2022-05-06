const express=require('express');
const route= express.Router();
const usercontroller=require('../controller/usercontroller')
console.log("iam here in route");
route.post('/register',usercontroller.register);
route.post('/login',usercontroller.login);
// route.post('/deleteuser',usercontroller.);
// route.post('/adduser',usercontroller.adduser);
module.exports=route;
