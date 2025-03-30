const mongoose=require('mongoose')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const captainShema=new mongoose.Schema({
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
        lowercase:true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    },
    //is he is availabl or not for take rides
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },


    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'color must be at least 3 charecter long'],
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'plate must be at least 3 charecter long'],
        },
        capacity:{
            type:Number,
            required:true,
            minlength:[1,'capacity must be at least 1'],
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto'],
        },
    },

    location:{
        lat:{
            type:Number,
        },
        lug:{
            type:Number,
        }
    },
})

captainShema.methods.generateAuthToken=function(){
    const token = jwt.sign({ _id: this._id },process.env.JWT_SECRET,{ expiresIn: '24h' });//token expire in 24 hrs
    return token;
}

captainShema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password, this.password);
}

captainShema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10)
}

const captainmodel=mongoose.model('captain',captainShema);
module.exports=captainmodel;