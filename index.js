const express=require("express");
const app=express();

const port=8000;





app.listen(port, function(err){
    if(err){
        console.log("error",err);
        console.log(`Errorin running the server: ${err}`);
    }
    console.log(`Server running on: ${port}`);
});