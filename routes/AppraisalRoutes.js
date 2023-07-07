import express from "express";
const router = express.Router();
import {
  getALLAppraisal,
  AddAppraisal,
  getAppraisal,
  updateAppraisal,
  deleteAppraisal,
} from "../controllers/AppraisalControllers.js";

router.post("/appraisal", AddAppraisal);
router.get("/appraisal", getALLAppraisal);
router.put("/appraisal/:id", updateAppraisal);
router.get("/appraisal/:id", getAppraisal);
router.delete("/appraisal/:id", deleteAppraisal);

export default router;
