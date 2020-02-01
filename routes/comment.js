const express=require('express');
const router=express.Router();
const control=require('../controllers/commentcontrol');

router.post('/create',control.create);

module.exports=router;