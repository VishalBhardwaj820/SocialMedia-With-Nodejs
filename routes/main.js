const express=require('express');
const router=express.Router();
const control=require('../controllers/maincontrol');

router.get('/',control.home);
router.use('/user',require('./user'));
router.use('/post',require('./post'));


module.exports=router;