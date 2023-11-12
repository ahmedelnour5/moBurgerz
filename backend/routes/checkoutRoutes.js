import express from "express";
import { checkout, success } from "../controllers/checkoutController.js";

const router = express.Router();

router.post("/", checkout);

router.get("/success", success);

export default router;
