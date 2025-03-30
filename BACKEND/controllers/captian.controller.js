const captainmodel=require('../models/captain.model');
const { findOne } = require('../models/user.model');
const captainservice=require('../services/captain.service');
const { validationResult }=require('express-validator');

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req); // No more typo
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);

    const { fullname, email, password ,vehicle} = req.body;

    const isCaptainIsAlreadyExist=await captainmodel.findOne({ email });//if email already exist 
    if(isCaptainIsAlreadyExist){
        return res.status(501).json({ massage: 'captain already exist '});
    }


    const hashedPassword = await captainmodel.hashPassword(password);

    const captain = await captainservice.Createcaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.generateAuthToken();
    res.status(201).json({ token, captain });
};