import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import employeeRoutes from "./routes/EmployeeRoutes.js";
import clientRoutes from "./routes/ClientRoutes.js";
import complimentRoutes from "./routes/ComplimentRoutes.js";
import ComplaintRoutes from "./routes/ComplaintRoutes.js";
import MedicationRoutes from "./routes/MedicationRoutes.js";
import ReviewsRoutes from "./routes/ReviewsRoutes.js";
import SafeRoutes from "./routes/SafeRoutes.js";
import SpotRoutes from "./routes/SpotRoutes.js";
import AppraisalRoutes from "./routes/AppraisalRoutes.js";
import SupervisionRoutes from "./routes/SupervisionRoutes.js";
import SafeGuardingRoutes from "./routes/SafeGuardingRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import * as dotenv from "dotenv";
dotenv.config();
const app = express();
connectDB();
// const corsOptions = {
//   origin: "http://localhost:3000",

//   // origin: "https://compliancesys.netlify.app",
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "POST, GET OPTIONS,PUT,DELETE",
//   "Access-Control-Allow-Headers":
//     "Content-Type, X-Auth-Token,Origin,Authorization",
//   optionSuccessStatus: 200,
// };
// app.use(cors());

const corsOptions = {
  // origin: "http://localhost:3000",
  origin: "*",
  // origin: "https://compliancesys.netlify.app",
  // origin: "https://compliancesystem.netlify.app",
  credentials: true,
};
// origin: "https://compliancesys.netlify.app/",
app.use(cors(corsOptions));

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
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

app.use("/api", employeeRoutes); // add update delete get

app.use("/api", clientRoutes);
app.use("/api", complimentRoutes);
app.use("/api", ComplaintRoutes);
app.use("/api", MedicationRoutes);
app.use("/api", ReviewsRoutes);
app.use("/api", SafeRoutes);
app.use("/api", SpotRoutes);
app.use("/api", AppraisalRoutes);
app.use("/api", SupervisionRoutes);
app.use("/api", SafeGuardingRoutes);
app.use("/api", userRoutes);

app.get("*", (req, res) => {
  res.send(`Compliance System Server`);
});
// Creating Express Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
