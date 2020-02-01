const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'gitsocial'
    }
},{timestamps:true});

const db=mongoose.model('Comment',schema);
module.exports=db;