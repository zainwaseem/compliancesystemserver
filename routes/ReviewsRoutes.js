import express from "express";
const router = express.Router();
import {
  AddReview,
  updateReview,
  deleteReview,
  getALLReview,
  getReview,
} from "../controllers/ReviewsController.js";

router.post("/reviews", AddReview);
router.get("/reviews", getALLReview);
router.put("/reviews/:id", updateReview);
router.get("/reviews/:id", getReview);
router.delete("/reviews/:id", deleteReview);

export default router;
