// routes/attendanceRoutes.js
import express from "express";
import { scanQR } from "../controllers/attendanceController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/scan", protect, scanQR);

export default router;