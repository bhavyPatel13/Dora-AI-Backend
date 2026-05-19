import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { generateDemo, generateWebite } from "../controller/websiteController.js";

const router = express.Router();

router.post("/generate", isAuthenticated, generateWebite);
router.post("/generateDemo", generateDemo);

export default router;