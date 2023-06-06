import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Client", clientSchema);
