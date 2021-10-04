'use strice';

const mongoose =require('mongoose');
//Creat schema
const drinksSchema= mongoose.Schema({
    strDrink:String,
   strDrinkThumb:String,
   idDrink:String,
})
const Drinksmoadel =mongoose.model('drinks_schima',drinksSchema);

module.exports =Drinksmoadel;