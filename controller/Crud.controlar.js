'use strict';

const Drinksmoadel =require('../modal/user.modal');


const creatUser = async (req,res)=>{
//     let datafrombody =req.body;
//     let newUser =await new Drinksmoadel(datafrombody);
//     try{ 
//         newUser.save();
//     res.send(newUser);
// }
//     catch(err){
//         console.log(err);
//         res.send(err);
//     }
let datafrombody = req.body;
let newUser =  Drinksmoadel(datafrombody);
newUser.save();
let data = await Drinksmoadel.find({});
res.status(201).json(data);
};

const getUser = (req,res)=>{
    Drinksmoadel.find().then((data)=>{
        res.status(200).json(data)
    })
    
}
const deleteUser = (req,res)=>{
    let itemDel =req.params.id;
    Drinksmoadel.findByIdAndDelete(itemDel).then(()=>{
        Drinksmoadel.find({}).then((data)=>res.json(data));
    })
    
}
const updateUser = async(req,res)=>{
    let fruteid = req.params.id;
    let update = req.body;
    Drinksmoadel.findOne({ _id: fruteid }).then(item => {
        item.strDrink = update.strDrink,
            item.strDrinkThumb = update.strDrinkThumb,
            item.idDrink = update.idDrink
        item.save();
    });
    let up = await Drinksmoadel.find({});
    res.status(200).send(up);
    
}

module.exports={
    creatUser,
    getUser,
    deleteUser,updateUser
}