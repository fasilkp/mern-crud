import UserModel from '../models/user.js';
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'


var salt = bcrypt.genSaltSync(10);

export async function UserRegister(req, res){
        try
        {
            const {name, email, password}=req.body;
            const hashPassword = bcrypt.hashSync(password, salt);
            const newUser = new UserModel({name, email,password:hashPassword})
            await newUser.save();
            res.json({success:true})
        }
        catch(err){
            res.json({success:false, error:err})
            console.log(err);
        }
}