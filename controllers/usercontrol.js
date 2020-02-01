const social=require('../models/user');
const post=require('../models/post');

module.exports.signin=function(req,res){
    if(req.isAuthenticated())
    {
    return res.render('profile');

    }
    return res.render('signin');
}

module.exports.signup=function(req,res){
    if(req.isAuthenticated())
    {
    return res.render('profile');

    }
    return res.render('signup');
}

module.exports.profile=function(req,res){

    post.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function(err,posts){
        return res.render('profile',{posts:posts});
    });
}

module.exports.create=function(req,res)
{
    console.log(req.body);
    if(req.body.password!=req.body.confirmpassword)
    {
        return res.redirect('signup');
    }
    social.findOne({email:req.body.email},function(err,user){
        if(err)
        {
            return; 
        }
        if(!user)
        {
            social.create(req.body,function(err,user){
                if(err)
                {
                    console.log(err);
                    return;
                }

                return res.redirect('/user/signin');

            });

        }
        else{
            return res.redirect('back');
        }

    });
}

module.exports.createsession=function(req,res)
{
    return res.redirect('/');
}

module.exports.signout=function(req,res)
{
    req.logout();
    return res.redirect('/');
}