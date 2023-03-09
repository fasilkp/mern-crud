import express from 'express';
import { checkUserLoggedIn, userLogin, userLogout, userRegister } from '../controllers/userController.js'

const router=express.Router();

router.get("/", (req, res)=>{res.json("hai")})
router.post("/register", userRegister)
router.post("/login", userLogin)
router.post("/logout", userLogout)
router.get("/check-auth", checkUserLoggedIn)

export default router