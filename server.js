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


app.get('/',(req,res)=>{
    res.send('server is runing')
})

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
})
