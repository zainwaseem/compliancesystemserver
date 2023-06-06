import express from "express";
const router = express.Router();
import {
  AddClient,
  getALLClients,
  updateClient,
  deleteClient,
} from "../controllers/ClientControllers.js";

router.post("/clients", AddClient);
router.get("/clients", getALLClients);
router.put("/clients/:id", updateClient);
router.delete("/clients/:id", deleteClient);

export default router;
