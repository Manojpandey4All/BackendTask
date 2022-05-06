const jwt=require('jsonwebtoken');
const tokencreation={
    createToken(Username){
        console.log("id",Username)
        let tokenId = jwt.sign({Username},process.env.JWT_kEY,{expiresIn:'1h'});
        return tokenId;
    }
}

module.exports=tokencreation;