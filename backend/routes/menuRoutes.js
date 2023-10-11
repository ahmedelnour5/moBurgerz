import express from "express";
import { getMenu, getOrderMenu } from "../controllers/menuController.js";

const router = express.Router();

router.get("/", getMenu);
router.get("/Order", getOrderMenu);

export default router;
