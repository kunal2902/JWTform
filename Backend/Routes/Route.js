import express from "express"
import { getFormData, loginData } from "../Controllers/controllers.js"


const router=express.Router()

router.post("/api/auth/register",getFormData)
router.post("/api/auth/login",loginData)

export default router;