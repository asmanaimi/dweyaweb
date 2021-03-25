/*const express =require('express');
const router =express.Router();
const Admin = require('../models/admin.js');
//Login
router.post('/auth' ,(req,res,next)=>{
   const email =req.body.email;
   const password=req.body.password;
   const query={email}
   Admin.findOne(query,(err,admin)=>{
if(err){
    return res.send({
        success:false,
        message:'Error,please try again'
    });
}
if(!admin){
    return res.send({
        success:false,
        message:'Error,Account not found'
    });
}
admin.isPasswordMatch(password,admin.password,(err,isMatch)=>{
if(!isMatch){

return res.send({
success:false,
message:'Error ,invalid password'
});

}
let returnAdmin ={
   name:admin.name, 
   email:admin.email, 
   id:admin._id
}
return res.send({
    success:true,
    message:'You can login now',
    admin:returnAdmin
    });
});
   });
});

//registration
router.post('/register' ,(req,res,next)=>{
   let newAdmin = new Admin({
       name:req.body.name,
       email:req.body.email,
       password:req.body.password
       
   });
   newAdmin.save((err,admin)=>{
       if(err){
         return   res.send({
             success:false,
             message:'Failed to save the admin'
         });
       }
       res.send({
        success:true,
        message:'success to save the admin',
        admin
       });
   })
  
});

module.exports=router;
*/
