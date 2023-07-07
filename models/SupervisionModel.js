import mongoose from "mongoose";

const supervisionSchema = new mongoose.Schema(
  {
    Supervisee: { type: String },
    Supervisor: { type: String },
    SupervisionDate: { type: String },
    Branch: { type: String },
    Reviewer: { type: String },
    ReviewDate: { type: String },
    NextReviewDate: { type: String },
    isChecked: { type: String },
    Discussiontheme: { type: String },
    Comments: { type: String },
    Action: { type: String },
    WorkLife: { type: String },
    issues: { type: String },
    CallsDroppedPicked: { type: String },
    Logging: { type: String },
    SpotChecks: { type: String },
    PolicyProcedures: { type: String },
    StrengthsWeaknesses: { type: String },
    adequate: { type: String },
    refreshing: { type: String },
    IssueswithRota: { type: String },
    Calls: { type: String },
    Workerwishes: { type: String },
    adequatelysupported: { type: String },
    isChecked1: { type: String },
    isChecked2: { type: String },
    SignedSupervisor: { type: String },
    SignedSupervisee: { type: String },
    PlannedDate: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Supervision", supervisionSchema);
