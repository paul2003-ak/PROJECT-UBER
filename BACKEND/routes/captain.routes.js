const express=require('express')
const router=express.Router();
const { body }=require('express-validator');
const captainController=require('../controllers/captian.controller');
const authcaptainmiddleware=require('../middleware/auth.middleware');

//register
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 charecters long'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 charecters long'),
    body('vehicle.color').isLength({min:3}).withMessage('color must be at least 3 charecters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate must be at least 3 charecters long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehical type '),
],
captainController.registerCaptain
)


//log in ..
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 charecters long')
],
captainController.logincaptain
)

//profile
router.get('/profile',authcaptainmiddleware.authcaptain,captainController.getCaptainProfile);


//logout 
router.get('/logout',authcaptainmiddleware.authcaptain,captainController.logoutcaptain);

module.exports=router;