const jwt= require('jsonwebtoken')
const verifyToken={

    tokencheck(request,response,next){
//Get Token from header
const headertoken = request.headers.token;
console.log("token in verify token :- ",headertoken);
//checking token is not undefined
if(typeof headertoken!=='undefined'){
    //split the the token into aray
    console.log('before split type',headertoken)
    const token=headertoken.split(' ')[1];
    console.log('after split',token);
     //verify the token
    jwt.verify(token,process.env.JWT_KEY,(err,user)=>{
    
            if(err) {
                response.status(403).json({Message:"Token is Not Valid..."})
            request.user = user;

            next()
            }
        else{
            response.json({user,Message:'authorized user'});
        }        })
}
else{
    response.sendStatus(403);
}
    }


}
module.exports=verifyToken;