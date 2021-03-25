require('dotenv').config();
//console.log(process.env.DATABASE);
const express=require('express');
const mongoose = require('mongoose');
const AdminRoutes=require('./administrateur/routes/admins');
const PharmacienRoutes=require('./chefpharmacien/routes/pharmaciens');
const TechnicienRoutes=require('./technicien/routes/techniciens');

const bodyParser=require('body-parser');

//initialiser app avec express
const app =express();
//connexion avec la base de doneés mongo
mongoose.connect(process.env.DATABASE,{useMongoClient :true });
mongoose.connection.on('connected',()=> {
    console.log('Connected to the database');
});
mongoose.connection.on('error',(err) => {
    console.log('Unable to connect to the database',+err);
});
//Middlewares//
app.use(bodyParser.json());
//app.use(passport.initialize());
//app.use(passport.session());
app.get('/',(req,res,next)=> {
res.send('Iam alive')
});
//port utilisé par le server
const _PORT =process.env.PORT;

//app.use('/admins',AdminRoutes);
app.use('/pharmaciens',PharmacienRoutes);
app.use('/techniciens',TechnicienRoutes);
//debut de server
app.listen(_PORT,()=> {
    console.log('server started');
})