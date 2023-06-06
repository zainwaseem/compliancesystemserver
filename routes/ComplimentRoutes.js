import express from "express";
const router = express.Router();
import {
  AddCompliment,
  getALLCompliments,
  updateCompliment,
  deleteCompliment,
} from "../controllers/ComplimentControllers.js";

router.post("/compliments", AddCompliment);
router.get("/compliments", getALLCompliments);
router.put("/compliments/:id", updateCompliment);
router.delete("/compliments/:id", deleteCompliment);

export default router;
