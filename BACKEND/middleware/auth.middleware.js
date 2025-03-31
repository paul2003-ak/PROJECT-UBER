const usermodel=require('../models/user.model')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const Blacklist = require('../models/blocklisttoken.model');
const captainmodel = require('../models/captain.model');

module.exports.authuser=async (req,res,next)=>{
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
    if(!token){
        return res.status(401).json({ massage:'unauthorized' });
    }

    const isBlacklisted = await Blacklist.findOne({ token });
    if(isBlacklisted){
        return res.status(401).json({ message: 'Unauthorized, token is blacklisted' });
    }

    try{

        const decoded=jwt.verify(token,process.env.JWT_SECRET);//after decode we get the user id 
        const user=await usermodel.findById(decoded._id);

        req.user=user; 

        return next();

    }catch(err){
        return res.status(401).json({ massage:'unauthorized' });
    }
}

//for captain
module.exports.authcaptain=async (req,res,next)=>{
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
    if(!token){
        return res.status(401).json({ massage:'unauthorized' });
    }

    const isBlacklisted = await Blacklist.findOne({ token });
    if(isBlacklisted){
        return res.status(401).json({ message: 'Unauthorized, token is blacklisted' });
    }
    
    try{

        const decoded=jwt.verify(token,process.env.JWT_SECRET);//after decode we get the user id 
        const captain=await captainmodel.findById(decoded._id);

        req.captain=captain; 

        return next();

    }catch(err){
        return res.status(401).json({ massage:'unauthorized' });
    }
}