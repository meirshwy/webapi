const { connect } = require("../routes/product");

module.exports = {

GetALLProducts:(req,res)=>{
    return res.status(200).json({msg:"all product"});
},

GetProductById:(req,res)=>{
        return res.status(200).json({msg:"product" + req.params.pid});
},

DeleteProductById:(req,res)=>{
        return res.status(200).json({msg:"product is delete" + req.params.pid});
},

UpdateProductById:(req,res)=>{
        return res.status(200).json({msg:"patch product id" + req.params.pid});
},

AddProduct:(req,res)=>{
        return res.status(200).json({msg:req.body});
}

}