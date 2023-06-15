import express from "express";
const router = express.Router();
import {
  getALLSafe,
  AddSafe,
  getSafe,
  updateSafe,
  deleteSafe,
} from "../controllers/SafeControllers.js";

router.post("/safe", AddSafe);
router.get("/safe", getALLSafe);
router.put("/safe/:id", updateSafe);
router.get("/safe/:id", getSafe);
router.delete("/safe/:id", deleteSafe);

export default router;
