const express=require("express")
const router=express.Router();
const { body }=require("express-validator")
const usercontroller=require('../controllers/user.controller')
const authusermiddleware=require('../middleware/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 charecters long'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 charecters long')
],
    usercontroller.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 charecters long')
],
    usercontroller.loginuser
)

router.get('/profile',authusermiddleware.authuser,usercontroller.getUserProfile);

router.get('/logout',authusermiddleware.authuser,usercontroller.logoutUser);

module.exports=router;