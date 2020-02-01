const post=require('../models/post');

module.exports.create=function(req,res)
{
    post.create({
        content:req.body.content,
        user:req.user._id
    },function(err,post){

        if(err)
        {
            console.log('post create error');
            return ;
        }

        return res.redirect('back');

    });   

}