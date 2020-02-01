// THIS IS PASSPORT
const express=require('express');
const port=8000;
const app=express();
const ejslayout=require('express-ejs-layouts');
const mongoose=require('./config/mongoose');
const user=require('./models/user');
const cookieparse=require('cookie-parser'); 
const passport=require('passport');
const passportlocal=require('./config/passport-local');
const session=require('express-session');




app.set('view engine','ejs');
app.set('views','views');
app.use(session({
    name:'vishal',
    secret:'somethimg',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticated);
app.use(ejslayout);
app.use(cookieparse());

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