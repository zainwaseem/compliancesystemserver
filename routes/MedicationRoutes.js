import express from "express";
const router = express.Router();
import {
  getALLMedication,
  updateMedication,
  deleteMedication,
  getMedication,
  AddMedication,
} from "../controllers/medicationControllers.js";

router.post("/medication", AddMedication);
router.get("/medication", getALLMedication);
router.put("/medication/:id", updateMedication);
router.get("/medication/:id", getMedication);
router.delete("/medication/:id", deleteMedication);

export default router;
