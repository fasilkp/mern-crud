import UserModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'

export default async function verifyAdmin(req, res, next){
    // try {
    //     const token = req.cookies.token;
    //     if (!token)
    //         return res.json({ error: true, message: "no token" });

    //     const verifiedJWT = jwt.verify(token, "myjwtsecretkey");
    //     const admin = await UserModel.findOne({_id:verifiedJWT.id, admin:true}, { password: 0 });
    //     req.admin=admin;
    //     if (!admin) {
    //         return res.json({ error:true, message:"Unauthorized" });
    //     }
    //     next()
    // } catch (err) {
    //     console.log(err)
    //     res.json({ error: err });
    // }

    next()

}