import mongoose from "mongoose";

const safeGuardingSchema = new mongoose.Schema(
  {
    serviceuser: { type: String },
    branch: { type: String },

    branchName: { type: String },
    personInvestigating: { type: String },
    serviceuserLocation: { type: String },
    timeIncident: { type: String },
    dateIncident: { type: String },
    locationIncident: { type: String },
    detailsIncident: { type: String },
    nameWitness: { type: String },
    medicalAttention: { type: String },
    resultInvestigating: { type: String },
    NameDesignation: { type: String },
    immediateAction: { type: String },
    incidentInvestigation: { type: String },
    agenciesContacted: { type: String },
    RegisteredManager: { type: String },
    furtherIncidents: { type: String },
    Signature: { type: String },
    Datecompletion: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("SafeGuarding", safeGuardingSchema);
