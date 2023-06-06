import mongoose from "mongoose";

const employeesSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Employee", employeesSchema);
