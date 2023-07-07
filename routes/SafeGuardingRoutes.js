import express from "express";
const router = express.Router();
import {
  getALLSafeGuarding,
  AddSafeGuarding,
  getSafeGuarding,
  updateSafeGuarding,
  deleteSafeGuarding,
} from "../controllers/SafeGuardingControllers.js";

router.post("/safeguarding", AddSafeGuarding);
router.get("/safeguarding", getALLSafeGuarding);
router.put("/safeguarding/:id", updateSafeGuarding);
router.get("/safeguarding/:id", getSafeGuarding);
router.delete("/safeguarding/:id", deleteSafeGuarding);

export default router;
