const express=require('express');
const router=express.Router();
const passport=require('passport');

const control=require('../controllers/usercontrol');

router.get('/signin',control.signin);
router.get('/signup',control.signup);
router.get('/profile',passport.checkAuthentication,control.profile);
router.post('/create',control.create);
router.post('/createsession',passport.authenticate(
    'local',{failureRedirect:'/user/signin'}
),control.createsession);
router.get('/signout',control.signout);
module.exports=router;