const passport=require('passport');
const passporlocal=require('passport-local').Strategy;
const social=require('../models/user');
passport.use(new passporlocal({
    usernameField:'email'},
    function(email,password,done)
    {
        social.findOne({email:email},function(err,user){
            if(err)
            {
                console.log('error in if passport');
                return(done(err));
            }

            if(!user || user.password!=password)
            {
                return done(null,false);
            }

            return done(null,user);
        });
    }   
));

passport.serializeUser(function(user,done){
    done(null,user.id);
});
passport.deserializeUser(function(id,done){
    social.findById(id,function(err,user){
        if(err)
        {
            return done(err);
        }
        return done(null,user);
    });
});


passport.checkAuthentication=function(req,res,next)
{
    if(req.isAuthenticated())
    {
        return next();
    }
    return res.redirect('/user/signin');
}
passport.setAuthenticated=function(req,res,next)
{
    if(req.isAuthenticated())
    {
        res.locals.user=req.user;

    }
    next();
}
module.exports=passport;