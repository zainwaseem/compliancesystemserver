import mongoose from "mongoose";
const complaintSchema = new mongoose.Schema(
  {
    name: { type: String },
    branch: { type: String },

    CpersonName: { type: String },
    status: { type: String, default: "pending" },
    complimentReference: { type: String },
    acknowledgementFormat: { type: String },
    natureofComplaint: { type: String },
    levelofSecurity: { type: String },
    employeeNameRelates: { type: String },
    address: { type: String },
    complaintRelateName: { type: String },
    complimentName: { type: String },
    complimentSummary: { type: String },
    DateResponse: { type: String },
    complaintDate: { type: String },
    ComplaintReceived: { type: String },
    dob: { type: String },
    ApprovedBy: { type: String },
    ComplaintSummary: { type: String },
    ResponseProvided: { type: String },
    ProposedResponse: { type: String },
    FindingsofInvestigation: { type: String },
    OverviewofComplaint: { type: String },
    EvidenceComplaint: { type: String },
    investigate: { type: String },
    InvestigationPlan: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Complaint", complaintSchema);
