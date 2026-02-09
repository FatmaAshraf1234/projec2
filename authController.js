const User = require("../models/User")
 const register = async (req,res)=>{
    try {
        const {name, email , password} = req.body;
        // validation 
        if(!name|| !email|| !password){
            return res.status(400).json({message: "All fields are required"});
        }
        //check if email already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"Email already exists"});
        }
        // create user 
        const user = await User.create({name,email,password});
        // response
    res.status(201).json({
        message: "User registered successfully",
        user
    });
    
    }catch (error) {
    console.error("REGISTER ERROR:", error);
    res.status(500).json({ message: error.message });
}

 };
 module.exports = {register};