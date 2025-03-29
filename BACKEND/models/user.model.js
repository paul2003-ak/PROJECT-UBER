const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt =require('jsonwebtoken')

const userschema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'first name must be at 3 charecters long'],
        },
        lastname:{
            type:String,
            minlength:[3,'last name must be at 3 charecters long'],
        },
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'email name must be 5 charecters long ']
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    },
})

userschema.methods.generateAuthToken=function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}

userschema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password, this.password);
}

userschema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10)
}

const usermodel=mongoose.model('user',userschema);
module.exports=usermodel;
