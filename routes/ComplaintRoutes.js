import express from "express";
const router = express.Router();
import {
  deleteComplaint,
  updateComplaint,
  getALLComplaints,
  getComplaint,
  AddComplaint,
  complaintsStatus,
} from "../controllers/ComplaintControllers.js";

router.post("/complaints", AddComplaint);
router.get("/complaints", getALLComplaints);
router.get("/complaints/:id", getComplaint);
router.put("/complaints/:id", updateComplaint);
router.patch("/complaintsstatus/:id", complaintsStatus);
router.delete("/complaints/:id", deleteComplaint);

export default router;
