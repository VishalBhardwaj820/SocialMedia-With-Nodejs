const express=require('express');
const port=8000;
const app=express();
const ejslayout=require('express-ejs-layouts');



app.set('view engine','ejs');
app.set('views','views');

app.use(ejslayout);
app.use('/',require('./routes/main'));

app.listen(port,function(err){
    if(err)
    {
        console.log("SERVER NOT READY FOR START");
        return;
    }
    console.log("SERVER IS READY TO RUN");
});