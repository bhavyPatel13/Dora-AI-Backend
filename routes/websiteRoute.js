import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {
    changeWebsite,
    deployWebsite,
    generateWebite,
    getAllWebsite,
    getBySlug,
    getWebsiteById
} from "../controller/websiteController.js";

const router = express.Router();

router.post("/generate", isAuthenticated, generateWebite);
router.post("/update/:id", isAuthenticated, changeWebsite);
router.get("getById/:id", isAuthenticated, getWebsiteById);
router.get("/getall", isAuthenticated, getAllWebsite);
router.get("/deploy/:id", isAuthenticated, deployWebsite);
router.get("/getBySlug/:slug", getBySlug);

export default router;