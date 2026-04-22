// routes/registrationRoutes.js
import express from "express";
import {
  registerEvent,
  getMyRegistrations
} from "../controllers/registrationController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, registerEvent);
router.get("/my", protect, getMyRegistrations);

export default router;