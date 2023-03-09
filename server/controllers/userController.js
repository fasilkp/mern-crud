import UserModel from '../models/userModel.js';
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'


var salt = bcrypt.genSaltSync(10);

export async function userRegister(req, res){
        try
        {
            const {name, email, password, about, proffession}=req.body;
            const hashPassword = bcrypt.hashSync(password, salt);
            const newUser = new UserModel({name, email,password:hashPassword, about, proffession})
            await newUser.save();
            res.json({success:true})
        }
        catch(err){
            res.json({success:false, error:err})
            console.log(err);
        }
}

export async function userLogin(req, res){
    try
    {
        const {email, password}=req.body;
        const user=await UserModel.findOne({email})
        if(!user) 
            return res.json({success:false, error:"No email found"})
        const userValid=bcrypt.compareSync(password, user.password);
        if(!userValid) 
            return res.json({success:false, error:"Password wrong"})
        const token=jwt.sign(
            {
                name:user.name,
                id:user._id
            }, 
            process.env.JWT_SECRET_KEY
        )
        // const exp= new Date()+ 1000*60;
        return res.cookie("token", token, {
                httpOnly: true,
                secure: true,
                maxAge: 1000 * 60 * 60 * 24 * 7,
                sameSite: "none",
            }).json({success:true, user:user._id})
    }
    catch(err){
        res.json({success:false,message:"server error", error:err})
        console.log(err);
    }
}

export const userLogout=async (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none",
      }).json({"message":"logged out"});
}

export const checkUserLoggedIn=async (req, res) => {
    try {
      const token = req.cookies.token;
      if (!token) 
        return res.json({loggedIn:false, error:"no token"});
    
      const verifiedJWT = jwt.verify(token, process.env.JWT_SECRET_KEY);
      return res.json({name:verifiedJWT.name, loggedIn: true});
    } catch (err) {
      res.json({loggedIn:false, error:err});
    }
}