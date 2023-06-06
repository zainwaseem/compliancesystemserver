import mongoose from "mongoose";
const complimentSchema = new mongoose.Schema(
  {
    name: { type: String },
    complimentDate: { type: String },
    complimentReceived: { type: String },
    natureOfCompliment: { type: String },
    levelofSecurity: { type: String },
    acknowledgedFormat: { type: String },
    employeeAgainst: { type: String },
    complimentAction: { type: String },
    complimentSummary: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Compliment", complimentSchema);
