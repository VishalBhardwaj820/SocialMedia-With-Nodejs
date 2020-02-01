const express=require('express');
const router=express.Router();

const control=require('../controllers/usercontrol');

router.get('/signin',control.signin);
router.get('/signup',control.signup);
router.get('/profile',control.profile);

module.exports=router;