'use strict';
const express = require('express');
const axios =require('axios');
const cors = require('cors');
const { json } = require('express');
require('dotenv').config();
const app= express();
app.use(cors());
app.use(express.json());
const PORT= process.env.PORT || 1178;
const usercont = require('./controller/user.controller')
const mongoose =require('mongoose');
const { creatUser,
    getUser,
    deleteUser,updateUser}=require('./controller/Crud.controlar')

// mongoose.connect(`${process.env.DBATLAS_LINK}`,{
//     useNewUrlParser: true, 

//     useUnifiedTopology: true    
//  });
 mongoose 
 .connect(process.env.DBATLAS_LINK, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
         })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));
 
app.get('/deinks',usercont.getDrink)

app.post('/fav',creatUser);
app.get('/fav',getUser);
app.put('/fav/:id',updateUser);
app.delete('/fav/:id',deleteUser);

app.get('/',(req,res)=>{
    res.send('server is runing')
})

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
})
