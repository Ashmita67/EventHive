// routes/certificateRoutes.js
import express from "express";
import { generateCert } from "../controllers/certificateController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/:registrationId", protect, generateCert);

export default router;