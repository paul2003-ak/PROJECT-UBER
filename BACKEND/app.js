const dotenv=require("dotenv")
dotenv.config();
const cors=require("cors")
const express=require("express")
const app=express();
const cookieparser=require('cookie-parser')

const connectToDb=require("./db/db")
const userroute=require('./routes/user.routes')



connectToDb();

app.use(cors())
app.use(cookieparser());

app.use(express.json())
app.use(express.urlencoded({extended:true}));



app.get("/",(req,res)=>{
    res.send("hallo")
})

app.use("/users",userroute)

module.exports=app;