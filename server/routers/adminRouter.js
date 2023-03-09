import express from 'express';
import { adminLogin,  createUser,  deleteUser,  editUser,  getUser,  getUsersList } from '../controllers/adminController.js';

const router=express.Router();

router.get("/users", getUsersList)
router.get("/user/:id", getUser)
router.post("/login", adminLogin)
router.post("/create-user", createUser)
router.post("/edit-user", editUser)
router.post("/delete-user", deleteUser)


export default router