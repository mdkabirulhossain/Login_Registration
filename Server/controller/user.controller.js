import { User } from "../model/user.model.js";

export const signup = async(req, res)=>{
    const {name, email, password} = req.body;

    try{
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({errors: "User already exist"})
        }

        const newUser = new User({
            name,
            email,
            password,
        })

        await newUser.save();
        return res.status(201).json({message: "User signup Successfully"})

    }catch(error){
        console.log("Error in signup", error)
    }
}