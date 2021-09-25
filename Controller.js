const express = require('express');
const cors = require('cors')
const app=express(); 
app.use(cors());
app.use(express.urlencoded({extended:false})); //ver



let port = 8081;
app.listen(port, (req,res)=>{
    console.log('servidor ok')
})