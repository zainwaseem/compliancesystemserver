import express from "express";
const router = express.Router();
import {
  getALLSupervision,
  AddSupervision,
  getSupervision,
  updateSupervision,
  deleteSupervision,
} from "../controllers/SupervisionControllers.js";

router.post("/supervision", AddSupervision);
router.get("/supervision", getALLSupervision);
router.put("/supervision/:id", updateSupervision);
router.get("/supervision/:id", getSupervision);
router.delete("/supervision/:id", deleteSupervision);

export default router;
