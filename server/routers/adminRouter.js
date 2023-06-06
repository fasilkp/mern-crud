import express from 'express';
import { adminLogin,  adminLogout,  checkAdminLoggedIn,  createUser,  deleteUser,  editUser,  getUser,  getUsersList } from '../controllers/adminController.js';
import verifyAdmin from '../middleware/verifyAdmin.js';

const router=express.Router();

router.get("/users", getUsersList)
router.get("/user/:id", getUser)
router.post("/login", adminLogin)
router.post("/create-user",verifyAdmin, createUser)
router.post("/edit-user",verifyAdmin, editUser)
router.post("/delete-user", deleteUser)
router.get("/check-auth", checkAdminLoggedIn)
router.get("/logout", adminLogout)


export default router