const express = require("express");
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedIn"); 
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

router.get("/",function(req,res){
    let error = req.flash("error");
    res.render("index",{error,loggedin: false});
});

router.get("/shop",isLoggedin, async function(req,res){
    let products = await productModel.find({});
    let success=req.flash("success");
    res.render("shop",{ products,success });
});
router.get("/cart",isLoggedin, async function(req,res){
    let user =await userModel
    .findOne({email:req.user.email})
    .populate("cart");
    
    const bill = Number(user.cart[0].price) + 20 - Number(user.cart[0].discount);

    res.render("cart",{user,bill});

});
router.get("/addtocart/:productid",isLoggedin, async function(req,res){
    let user = await userModel.findOne({email:req.user.email});
    user.cart.push(req.params.productid);
    await user.save();
    req.flash("success","Added to cart");
    res.redirect("/shop");
})

module.exports = router;