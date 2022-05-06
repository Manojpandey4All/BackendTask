const { response } = require("express");
const usermodel = require("../db/models/usermodel");

const useroperations={
    add(obj){
        const promise= usermodel.create(obj);
        return promise;
    }
,
    finduser(obj){
        // console.log("username",Email);
        const promise= usermodel.find({Email:obj.Email,Password:obj.Password});
       return promise;
     
    }
}
module.exports=useroperations;