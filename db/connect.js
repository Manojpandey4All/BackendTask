const mongoose=require('mongoose');


mongoose.connect(process.env.DBURL,(err)=>{
    
    if(err){
            console.log(err);
        }
        else{
            console.log("Connection Stablished")
        }
    })

module.exports=mongoose;