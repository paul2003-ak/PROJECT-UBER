const usermodel = require("../models/user.model");
const userservice = require('../services/user.service');
const { validationResult } = require('express-validator'); 
const Blacklist=require('../models/blocklisttoken.model');


module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req); // No more typo
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);

    const { fullname, email, password } = req.body;

    const isUserIsAlreadyExist=await usermodel.findOne({ email });//if email already exist 
    if(isUserIsAlreadyExist){
        return res.status(501).json({ massage: 'user is already exist '});
    }

    const hashedPassword = await usermodel.hashPassword(password);

    const user = await userservice.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
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
    
    res.cookie('token',token );

    res.status(200).json({ token,user });
}

//getUserProfile for profile 
module.exports.getUserProfile=async(req,res,next)=>{
    res.status(200).json(req.user);
}


//logout user
module.exports.logoutUser = async (req, res, next) => {
    try {
        // Extract token from cookies or Authorization header
        const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

        if (token) {
            // Add token to blacklist for invalidation with TTL (optional)
            await Blacklist.create({ token });

            // Clear token from cookies
            res.clearCookie('token');

            // Return success response
            return res.status(200).json({ message: 'Logout successful' });
        }

        // No token case
        return res.status(400).json({ message: 'No token provided to logout' });
    } catch (err) {
        console.error('Logout error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};