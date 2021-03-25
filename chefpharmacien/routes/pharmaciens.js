const express =require('express');
const technicien = require('../../technicien/models/technicien');
const router =express.Router();
const pharmacien = require('../models/pharmacien');

//Login
router.post('/register' ,(req,res,next)=>{
    let newPharmacien = new pharmacien({
        name:req.body.name,
        email:req.body.email,
       adress:req.body.adress,
       cin:req.body.tel,
       tel:req.body.tel,
        namepharma:req.body.namepharma,
        password:req.body.password
        
    });
    newPharmacien.save((err,pharmacien)=>{
        if(err){
          return   res.send({
              success:false,
              message:'Failed to save pharmacien'
          });
        }
        res.send({
         success:true,
         message:'success to save pharmacien',
        pharmacien
        });
    })
   
 });
 router.post('/registertech' ,(req,res,next)=>{
    let newtechnicien = new technicien({
        name:req.body.name,
        email:req.body.email,
       adress:req.body.adress,
       cin:req.body.tel,
       tel:req.body.tel,
        password:req.body.password
        
    });
    newtechnicien.save((err,technicien)=>{
        if(err){
          return   res.send({
              success:false,
              message:'Failed to save pharmacien'
          });
        }
        res.send({
         success:true,
         message:'success to save pharmacien',
        technicien
        });
    })
   
 });
 router.post('/authpharma' ,(req,res,next)=>{
    const email =req.body.email;
    const password=req.body.password;
    const query={email}
    pharmacien.findOne(query,(err,pharmacien)=>{
 if(err){
     return res.send({
         success:false,
         message:'Error,please try again'
     });
 }
 if(!pharmacien){
     return res.send({
         success:false,
         message:'Error,Account not found'
     });
 }
 pharmacien.isPasswordMatch(password,pharmacien.password,(err,isMatch)=>{
 if(!isMatch){
 
 return res.send({
 success:false,
 message:'Error ,invalid password'
 });
 
 }
 let returnpharmacien ={
    name:pharmacien.name, 
    email:pharmacien.email, 
    id:pharmacien._id
 }
 return res.send({
     success:true,
     message:'You can login now',
     pharmacien:returnpharmacien
     });
 });
    });
 });

 router.put('/updatepharma/:id', function (req, res, next) {
    // fetch user
    pharmacien.findById(req.params.id, function(err, post) {
        if (err) return next(err);
 
        _.assign(post, req.body); // update user
        post.save(function(err) {
            if (err) return next(err);
            return res.json(200, post);
        })
    });
 });

module.exports=router;
