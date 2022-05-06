const Userdto = require("../dto/userdto");
const useroperations = require("../services/useroperations");
const token=require('../utils/tokencreation');

const usercontroller={

    login(request,response){
        const obj={
             'Email':request.body.Email,
             'Password':request.body.Password
        }
        // const email=request.body.Email;

        const promise= useroperations.finduser(obj);
        promise.then(data=>{
           
            if(data.length===0){
                
                promise.then((data)=>{
           
                    response.status(200).send('Login Unsucessfull')
                   
                  
                    // console.log('login successfully',data);
                }).catch((err)=>{
                    response.status(500).send("Invalid Login ID and Password")
                    // console.log(err.message);
                 
                }
                )}
                else{
                    console.log("data in data",data[0].Username);
                    const accesstoken = token.createToken(data[0].Username);
                    response.status(200).json({accesstoken,message:'Login sucessfully'});
                  
                }
        
        })
     
}



    ,
    register(request,response){
        const dto=new Userdto(request.body.Name, request.body.Username,request.body.Email,request.body.Password)
        const promise=useroperations.add(dto);
        promise.then((data)=>{
            response.status(200).send("Register Successfully");
        }).catch(err=>{
            response.status(500).send("Register Unsucessfully")
        })
    }
}
module.exports=usercontroller;