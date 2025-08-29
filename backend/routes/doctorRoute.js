import express from 'express' 
import { appointmentCancel, appointmentsDoctor, doctorList, loginDoctor,updateProfile, getProfile, completeAppointment } from '../controllers/doctorController.js'
import authDoctor from '../middlewares/authDctor.js'
import upload from '../middlewares/multer.js'

const router = express.Router()

router.get("/list", doctorList)
router.post('/login',loginDoctor)
router.get("/appointments", authDoctor, appointmentsDoctor)
router.post("/cancel-appointment", authDoctor, appointmentCancel)
router.post('/update-profile',upload.single('image'), authDoctor,updateProfile)
router.get('/get-profile',authDoctor, getProfile)
router.post("/complete-appointment", authDoctor, completeAppointment)

export default router