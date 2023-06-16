import express from "express";
const router = express.Router();
import {
  AddEmployee,
  getALLEmployees,
  updateEmployee,
  deleteEmployee,
  getEmployee,
} from "../controllers/EmployeeControllers.js";

router.post("/employees", AddEmployee);
router.get("/employees", getALLEmployees);
router.put("/employees/:id", updateEmployee);
router.get("/employees/:id", getEmployee);
router.delete("/employees/:id", deleteEmployee);

export default router;
