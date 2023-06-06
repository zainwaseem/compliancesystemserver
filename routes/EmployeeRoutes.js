import express from "express";
const router = express.Router();
import {
  AddEmployee,
  getALLEmployees,
  updateEmployee,
  deleteEmployee,
} from "../controllers/EmployeeControllers.js";

router.post("/employees", AddEmployee);
router.get("/employees", getALLEmployees);
router.put("/employees/:id", updateEmployee);
router.delete("/employees/:id", deleteEmployee);

export default router;
