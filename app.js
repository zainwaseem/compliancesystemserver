import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json({ limit: "50mb" }));
connectDB();
import { v2 as cloudinary } from "cloudinary";
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
connectDB();
// Error Handling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "something went wrong!";

  return res.status(status).json({
    success: false,
    status,
    message,
  });
});
//Routes
app.get("*", (req, res) => {
  res.send(`Compliance System Server`);
});

// Creating Express Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
