import mongoose from "mongoose";
const medicationSchema = new mongoose.Schema(
  {
    pharmacy: { type: String },
    branch: { type: String },
    dateAudit: { type: String },
    serviceuser: { type: String },

    labelsprint: { type: String },
    dosageclear: { type: String },
    labelsdefaced: { type: String },
    cautionswarnings: { type: String },
    MDS: { type: String },
    riskassessment: { type: String },
    correctmedicine: { type: String },
    medicinepolicy: { type: String },
    allergies: { type: String },
    drinkoffered: { type: String },
    medicineexpiry: { type: String },
    speicalinstructions: { type: String },
    pharmacistGP: { type: String },
    annualreview: { type: String },
    capsules: { type: String },
    raisedGP: { type: String },
    auditplan: { type: String },
    actionrequires: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Medication", medicationSchema);
