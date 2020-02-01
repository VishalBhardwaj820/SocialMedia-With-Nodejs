const express=require('express');
const port=8000;



const app=express();

app.listen(port,function(err){
    if(err)
    {
        console.log("SERVER NOT READY FOR START");
        return;
    }
    console.log("SERVER IS READY TO RUN");
});