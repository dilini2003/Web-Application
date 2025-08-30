import express from "express";
import multer from "multer";
import {
  addDoctor,
  alldoctors,
  appointmentCancel,
  appointmentsAdmin,
  loginAdmin,
} from "../controllers/adminController.js";
import authAdmin from "../middlewares/authAdmin.js";
import upload from "../middlewares/multer.js";
import { changeAvailability } from "../controllers/doctorController.js";

const router = express.Router();

router.post("/login", loginAdmin);

// protected route for adding doctor
router.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);

router.post("/all-doctors", authAdmin, alldoctors);

router.post("/change-availability", authAdmin, changeAvailability);

router.get("/appointments", authAdmin, appointmentsAdmin);

router.post("/cancel-appointment", authAdmin, appointmentCancel);

export default router;
