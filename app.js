const express = require('express');
const dotenv= require('dotenv');


const app = express()
dotenv.config();
app.use(express.json());
app.use(express.urlencoded());
app.use('/',require('./routes/pageroutes'));
app.use("/user",require("./routes/userroutes"));

const server=app.listen(process.env.PORT,()=>{
console.log('Server is up');
})