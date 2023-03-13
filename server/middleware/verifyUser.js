import UserModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'

export default async function verifyUser(req, res, next){
    try {
        const token = req.cookies.token;
        if (!token)
            return res.status(401).json({ error: true, message: "no token" });

        const verifiedJWT = jwt.verify(token, "myjwtsecretkey");
        const user = await UserModel.findById(verifiedJWT.id, { password: 0 });
        req.user=user;
        if (!user) {
            return res.status(401).json({ error:true, message:"Unauthorized" });
        }
        next()
    } catch (err) {
        console.log(err)
        res.json({ error: err });
    }
}