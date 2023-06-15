import express from "express";
const router = express.Router();
import {
  getALLSpot,
  AddSpot,
  getSpot,
  updateSpot,
  deleteSpot,
} from "../controllers/SpotControllers.js";

router.post("/spot", AddSpot);
router.get("/spot", getALLSpot);
router.put("/spot/:id", updateSpot);
router.get("/spot/:id", getSpot);
router.delete("/spot/:id", deleteSpot);

export default router;
