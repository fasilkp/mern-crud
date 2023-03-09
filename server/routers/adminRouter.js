import express from 'express';
import { adminLogin,  createUser,  editUser,  getUser,  getUsersList } from '../controllers/adminController.js';

const router=express.Router();

router.get("/users", getUsersList)
router.get("/user/:id", getUser)
router.post("/login", adminLogin)
router.post("/create-user", createUser)
router.post("/edit-user", editUser)


export default router