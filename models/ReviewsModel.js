import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
  {
    serviceuser: { type: String },
    branch: { type: String },

    address: { type: String },
    namesignature: { type: String },
    banchaname: { type: String },
    Datereview: { type: String },
    citizens: { type: String },
    goodcarequality: { type: String },
    workerarrive: { type: String },
    workervisit: { type: String },
    Idbadge: { type: String },
    neatpresentatble: { type: String },
    sayhello: { type: String },
    carereliable: { type: String },
    timeexpected: { type: String },
    enoughtime: { type: String },
    rashedearly: { type: String },
    talktome: { type: String },
    doeverything: { type: String },
    knowledgeable: { type: String },
    listentome: { type: String },
    feesafe: { type: String },
    securehome: { type: String },
    dietaryneeds: { type: String },
    supportplan: { type: String },
    branchstaff: { type: String },
    raisecompliment: { type: String },
    outofoffice: { type: String },
    docallme: { type: String },
    servicerecived: { type: String },
    needsimprovement: { type: String },
    recommended: { type: String },
    branchactions: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
