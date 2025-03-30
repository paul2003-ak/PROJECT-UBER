const captainmodel=require('../models/captain.model')

module.exports.Createcaptain=async({
    firstname,
    lastname,
    email,
    password,
    color,
    plate,
    capacity,
    vehicleType
})=>{
    if(!firstname || !email || !password  || !color || !plate || !capacity || !vehicleType){
        throw new Error('All fieldis required');
    }
    const captain=captainmodel.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType,
        },
    })

    return captain;
}