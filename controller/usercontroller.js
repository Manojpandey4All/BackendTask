const Userdto = require("../dto/userdto");
const useroperations = require("../services/useroperations");
const token=require('../utils/tokencreation');

const usercontroller={

    login(request,response){
        const obj={
             'Email':request.body.Email,
             'Password':request.body.Password
        }
        console.log("user data",request.body.Email);
        // const email=request.body.Email;

        const promise= useroperations.finduser(obj);
        promise.then(data=>{
        //    console.log('datais ',data)
            if(data===null){
                
                          
                    response.status(200).send('Login Unsucessfull')
                   
                  
                                 
             
                }
                else{

                        // console.log("data in data",data.Username);
                        const accesstoken = token.createToken(data.Username);
                        response.status(200).json({accesstoken,message:'Login sucessfully'});
                                    
                  
                }
        
        }).catch(err=>{
            console.log(err.message);
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
