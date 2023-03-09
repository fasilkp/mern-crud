
export async function adminLogin(req, res){
    try
    {
        const {email, password}=req.body;
        const admin=await UserModel.findOne({email, admin:true})
        if(!admin) 
            return res.json({error:true,message:"You have no admin access"})
        const adminValid=bcrypt.compareSync(password, user.password);
        if(!adminValid) 
            return res.json({error:true, message:"wrong Password"})
        const token=jwt.sign(
            {
                admin:true,
                id:user._id
            }, 
            "myjwtsecretkey"
        )
        // const exp= new Date()+ 1000*60;
        return res.cookie("token", token, {
                httpOnly: true,
                secure: true,
                maxAge: 1000 * 60 * 60 * 24 * 7,
                sameSite: "none",
            }).json({error:false, user:user._id})
    }
    catch(err){
        res.json({message:"server error", error:err})
        console.log(err);
    }
}