import express from 'express';
import { adminLogin,  getUsersList } from '../controllers/adminController.js';

const router=express.Router();

router.get("/users", getUsersList)
router.post("/login", adminLogin)


export default router