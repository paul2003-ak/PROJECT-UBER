//this page has only one work create user only 

const usermodel=require('../models/user.model')


module.exports.createUser=async({
    firstname,
    lastname,
    email,
    password
})=>{
    if(!firstname || !email || !password){
        throw new Error('All fieldis required');
    }
    const user=usermodel.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password,
    })

    return user;
}

