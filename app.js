import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import employeeRoutes from "./routes/EmployeeRoutes.js";
import clientRoutes from "./routes/ClientRoutes.js";
import complimentRoutes from "./routes/ComplimentRoutes.js";
import ComplaintRoutes from "./routes/ComplaintRoutes.js";

import * as dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json({ limit: "50mb" }));
connectDB();
// import { v2 as cloudinary } from "cloudinary";
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true,
// };
const corsOptions = {
  // origin: "http://localhost:3000",
  origin: "https://compliancesys.netlify.app",
  credentials: true,
};
// origin: "https://compliancesys.netlify.app/",

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
app.use("/api", employeeRoutes);
app.use("/api", clientRoutes);
app.use("/api", complimentRoutes);
app.use("/api", ComplaintRoutes);

app.get("*", (req, res) => {
  res.send(`Compliance System Server`);
});
// Creating Express Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
