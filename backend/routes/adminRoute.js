import express from "express";
import multer from "multer";
import { addDoctor, loginAdmin } from "../controllers/adminController.js";
import authAdmin from "../middlewares/authAdmin.js";

const router = express.Router();

// configure multer for local temp uploads
const upload = multer({ dest: "uploads/" });

router.post("/login", loginAdmin);

// protected route for adding doctor
router.post("/add-doctor",authAdmin ,upload.single('image'), addDoctor);

export default router;
