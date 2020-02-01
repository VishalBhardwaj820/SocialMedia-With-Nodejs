const express=require('express');
const router=express.Router();
const control=require('../controllers/maincontrol');
const mongoose=require('../config/mongoose');

router.get('/',control.home);
router.use('/user',require('./user'));


module.exports=router;