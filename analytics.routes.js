import express from "express";
import { getChannelAnalytics } from "../controllers/analytics.controller.js";

const router = express.Router();
router.get("/channel", getChannelAnalytics);

export default router;
