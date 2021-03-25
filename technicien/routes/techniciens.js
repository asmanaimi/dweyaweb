const express =require('express');
const router =express.Router();
const technicien = require('../../technicien/models/technicien');
var _ = require('lodash');
//auth technicien

 router.post('/authtechnicien' ,(req,res,next)=>{
    const email =req.body.email;
    const password=req.body.password;
    const query={email}
    technicien.findOne(query,(err,technicien)=>{
 if(err){
     return res.send({
         success:false,
         message:'Error,please try again'
     });
 }
 if(!technicien){
     return res.send({
         success:false,
         message:'Error,Account not found'
     });
 }
 technicien.isPasswordMatch(password,technicien.password,(err,isMatch)=>{
 if(!isMatch){
 
 return res.send({
 success:false,
 message:'Error ,invalid password'
 });
 
 }
 let returntechnicien ={
    name:technicien.name, 
    email:technicien.email, 
    id:technicien._id
 }
 return res.send({
     success:true,
     message:'You can login now',
     technicien:returntechnicien
     });
 });
    });
 });
 //update technicien

 router.put('/updatetech/:id', function (req, res, next) {
   // fetch user
   technicien.findById(req.params.id, function(err, post) {
       if (err) return next(err);

       _.assign(post, req.body); // update user
       post.save(function(err) {
           if (err) return next(err);
           return res.json(200, post);
       })
   });
});

module.exports=router;
