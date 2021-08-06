const JwtStrategy = require('passport-jwt').Strategy;
const  ExtractJwt = require('passport-jwt').ExtractJwt;
const Pharmacien = require('../../chefpharmacien/models/pharmacien');

module.exports = function (passport) {

  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.SECRET;

 
 /* passport.use(new JwtSrategy(opts, (jwt_payload, done)=>{
    Pharmacien.findById(jwt_payload.pharmacien._id, (err, pharmacien)=>{
        if (err){
            return done(err, false);
        }
    
    if(pharmacien){
        return done(null, pharmacien) ;
    }
    }) ;
        }));*/
        passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
            Pharmacien.findOne({id: jwt_payload._id}, function(err, pharmacien) {
                if (err) {
                    return done(err, false);
                }
                if (pharmacien) {
                    return done(null, pharmacien);
                } else {
                    return done(null, false);
                    // or you could create a new account
                }
            });
        }));

}