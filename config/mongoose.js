const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/gitdata');

const mydb=mongoose.connection;

mydb.once('open',function(){
    console.log('DATABASE SUCCESSFULLY CONNECTED');
});

module.exports=mydb;