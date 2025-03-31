const captainmodel=require('../models/captain.model');
const captainservice=require('../services/captain.service');
const { validationResult }=require('express-validator');
const Blacklist=require('../models/blocklisttoken.model')

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


//log in 
module.exports.logincaptain=async(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors:errors.array() });
    }

    const{email,password}=req.body;

    const captain = await captainmodel.findOne({email}).select('+password');

    if(!captain){//if user not present in db
        return res.status(401).json({ massage:'Invalid email or password' });
    }
    
    const isMatch=await captain.comparePassword(password);//comparePassword is in captainmodel for compare the passwod
    if(!isMatch){
        return res.status(401).json({ massage:'Invalid email or Password'});
    }

    const token=captain.generateAuthToken();
    
    res.cookie('token',token );

    res.status(200).json({ token,captain });
}

//profile
module.exports.getCaptainProfile=async(req,res,next)=>{
    res.status(200).json(req.captain);
}

//logout captain
module.exports.logoutcaptain = async (req, res, next) => {
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

