const social=require('../models/user');

module.exports.signin=function(req,res){
    return res.render('signin');
}

module.exports.signup=function(req,res){
    return res.render('signup');
}

module.exports.profile=function(req,res){
    return res.render('profile');
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
    return res.render('profile');
}