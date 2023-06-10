import express from "express";
const router = express.Router();
import {
  deleteComplaint,
  updateComplaint,
  getALLComplaints,
  getComplaint,
  AddComplaint,
} from "../controllers/ComplaintControllers.js";

router.post("/complaints", AddComplaint);
router.get("/complaints", getALLComplaints);
router.put("/complaints/:id", getComplaint);
router.put("/complaints/:id", updateComplaint);
router.delete("/complaints/:id", deleteComplaint);

export default router;
