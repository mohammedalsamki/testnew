'use strice';

const mongoose =require('mongoose');
//Creat schema
const drinksSchema= mongoose.Schema({
   title:{
       type :String,
       unique : true,
   },
   img:String,
   id:String,
})
const Drinksmoadel =mongoose.model('drinks_schima',drinksSchema);

module.exports =Drinksmoadel;