const mongoose =require('mongoose');
const bcrypt=require('bcryptjs');

const technicienschema =mongoose.Schema({
name: {type:String,required:true},
cin: {type:String,required:true},
email:{type:String,required:true},
adress:{type:String,required:true},
tel:{type:String,required:true},
password:{type:String,required:true},
});


technicienschema.pre('save',  function(next) {
    var technicien = this;

    // only hash the password if it has been modified (or is new)
    if (!technicien.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(technicien.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            technicien.password = hash;
            technicien.verify = hash
            next();
        });
    });
});
technicienschema.methods.isPasswordMatch =function(plainPassword,hashed,callback){
    bcrypt.compare(plainPassword,hashed,(err,isMatch)=>{
if(err){
    next(err);
}
callback(null,isMatch);


    });
};

const technicien =mongoose.model('technicien',technicienschema);

module.exports = technicien;
