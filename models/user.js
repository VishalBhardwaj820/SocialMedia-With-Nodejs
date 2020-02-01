const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:false});
const gitsocial=mongoose.model('gitsocial',schema);

module.exports=gitsocial;