import express from 'express';
import { adminLogin,  createUser,  getUsersList } from '../controllers/adminController.js';

const router=express.Router();

router.get("/users", getUsersList)
router.post("/login", adminLogin)
router.post("/create-user", createUser)


export default router