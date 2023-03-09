import express from 'express';
import { adminLogin } from '../controllers/adminController.js';

const router=express.Router();

router.get("/", (req, res)=>{res.json("hai admin")})
router.post("/login", adminLogin)


export default router