import Supervision from "../models/ClientModel.js";

const AddSupervision = async (req, res, next) => {
  try {
    const {
      Supervisee,
      Supervisor,
      SupervisionDate,
      Branch,
      Reviewer,
      ReviewDate,
      NextReviewDate,
      isChecked,
      Discussiontheme,
      Comments,
      Action,
      WorkLife,
      issues,
      CallsDroppedPicked,
      Logging,
      SpotChecks,
      PolicyProcedures,
      StrengthsWeaknesses,
      adequate,
      refreshing,
      IssueswithRota,
      Calls,
      Workerwishes,
      adequatelysupported,
      isChecked1,
      isChecked2,
      SignedSupervisor,
      SignedSupervisee,
      PlannedDate,
    } = req.body;
    const newSupervision = new Supervision({
      Supervisee,
      Supervisor,
      SupervisionDate,
      Branch,
      Reviewer,
      ReviewDate,
      NextReviewDate,
      isChecked,
      Discussiontheme,
      Comments,
      Action,
      WorkLife,
      issues,
      CallsDroppedPicked,
      Logging,
      SpotChecks,
      PolicyProcedures,
      StrengthsWeaknesses,
      adequate,
      refreshing,
      IssueswithRota,
      Calls,
      Workerwishes,
      adequatelysupported,
      isChecked1,
      isChecked2,
      SignedSupervisor,
      SignedSupervisee,
      PlannedDate,
    });
    await newSupervision.save();
    return res.json({ message: "Supervision added successfully" });
  } catch (error) {
    next(error);
  }
};

const getALLSupervision = async (req, res) => {
  try {
    const supervisions = await Supervision.find();
    return res.json(supervisions);
  } catch (error) {
    console.log(error);
  }
};

const getSupervision = async (req, res) => {
  try {
    const singleSupervision = await Supervision.findById(req.params.id);
    return res.json(singleSupervision);
  } catch (error) {
    console.log(error);
  }
};

const updateSupervision = async (req, res) => {
  const {
    Supervisee,
    Supervisor,
    SupervisionDate,
    Branch,
    Reviewer,
    ReviewDate,
    NextReviewDate,
    isChecked,
    Discussiontheme,
    Comments,
    Action,
    WorkLife,
    issues,
    CallsDroppedPicked,
    Logging,
    SpotChecks,
    PolicyProcedures,
    StrengthsWeaknesses,
    adequate,
    refreshing,
    IssueswithRota,
    Calls,
    Workerwishes,
    adequatelysupported,
    isChecked1,
    isChecked2,
    SignedSupervisor,
    SignedSupervisee,
    PlannedDate,
  } = req.body;

  try {
    await Supervision.findByIdAndUpdate(req.params.id, {
      Supervisee,
      Supervisor,
      SupervisionDate,
      Branch,
      Reviewer,
      ReviewDate,
      NextReviewDate,
      isChecked,
      Discussiontheme,
      Comments,
      Action,
      WorkLife,
      issues,
      CallsDroppedPicked,
      Logging,
      SpotChecks,
      PolicyProcedures,
      StrengthsWeaknesses,
      adequate,
      refreshing,
      IssueswithRota,
      Calls,
      Workerwishes,
      adequatelysupported,
      isChecked1,
      isChecked2,
      SignedSupervisor,
      SignedSupervisee,
      PlannedDate,
    });
    return res
      .status(200)
      .json({ message: `Supervision updated successfully` });
  } catch (error) {
    next(error);
  }
};
const deleteSupervision = async (req, res) => {
  try {
    await Supervision.findByIdAndDelete(req.params.id);
    return res.json({ message: `Supervision deleted successfully` });
  } catch (error) {
    next(error);
  }
};

export {
  getALLSupervision,
  AddSupervision,
  getSupervision,
  updateSupervision,
  deleteSupervision,
};
