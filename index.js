const express=require('express');
const port=8000;
const app=express();
const ejslayout=require('express-ejs-layouts');
const mongoose=require('./config/mongoose');
const user=require('./models/user');


// THIS IS PASSPORT



app.set('view engine','ejs');
app.set('views','views');
app.use(ejslayout);

app.use(express.urlencoded());
app.use('/',require('./routes/main'));


app.listen(port,function(err){
    if(err)
    {
        console.log("SERVER NOT READY FOR START");
        return;
    }
    console.log("SERVER IS READY TO RUN");
});