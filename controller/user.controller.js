'use strict';
//step 3 added our async fun
const axios =require('axios');
const getDrink = async(req,res) =>{
    const url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
        let axiosRes = await axios.get(url);
    let Data = axiosRes.data;
    console.log(Data)
res.send(Data)
}
module.exports={
    getDrink
}

