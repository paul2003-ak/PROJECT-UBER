const usermodel = require("../models/user.model");
const userservice = require('../services/user.service');
const { validationResult } = require('express-validator'); 

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req); // No more typo
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);

    const { fullname, email, password } = req.body;

    const hashedPassword = await usermodel.hashPassword(password);

    const user = await userservice.createUser({
        firstname: fullname.firstname,
        lastname: fullname.firstname,
        email,
        password: hashedPassword,
    });

    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
};


//login controller
module.exports.loginuser=async(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors:errors.array() });
    }

    const{email,password}=req.body;

    const user = await usermodel.findOne({email}).select('+password');

    if(!user){//if user not present in db
        return res.status(401).json({ massage:'Invalid email or password' });
    }
    
    const isMatch=await user.comparePassword(password);//comparePassword is in usermodel for compare the passwod
    if(!isMatch){
        return res.status(401).json({ massage:'Invalid email or Password'});
    }

    const token=user.generateAuthToken();

    res.status(200).json({ token,user });
}