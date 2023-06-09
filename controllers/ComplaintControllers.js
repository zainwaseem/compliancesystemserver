import { HEADER_URL } from "../HeaderUrl.js";
import Complaint from "../models/ComplaintModel.js";

const AddComplaint = async (req, res, next) => {
  try {
    const {
      name,
      branch,
      CpersonName,
      ComplaintReference,
      acknowledgementFormat,
      levelofSecurity,
      natureofComplaint,
      employeeNameRelates,
      address,
      complaintRelateName,
      ComplaintName,
      DateResponse,
      complaintDate,
      ComplaintReceived,
      dob,
      ApprovedBy,
      ComplaintSummary,
      ResponseProvided,
      ProposedResponse,
      FindingsofInvestigation,
      OverviewofComplaint,
      EvidenceComplaint,
      investigate,
      InvestigationPlan,
    } = req.body;
    const newComplaint = new Complaint({
      name,
      CpersonName,
      branch,
      ComplaintReference,
      acknowledgementFormat,
      levelofSecurity,
      natureofComplaint,
      employeeNameRelates,
      address,
      complaintRelateName,
      ComplaintName,
      DateResponse,
      complaintDate,
      ComplaintReceived,
      dob,
      ApprovedBy,
      ComplaintSummary,
      ResponseProvided,
      ProposedResponse,
      FindingsofInvestigation,
      OverviewofComplaint,
      EvidenceComplaint,
      investigate,
      InvestigationPlan,
    });
    await newComplaint.save();
    res.setHeader("Access-Control-Allow-Origin", HEADER_URL);

    return res.json({ message: "Complaint added successfully" });
  } catch (error) {
    next(error);
  }
};

const getALLComplaints = async (req, res, next) => {
  try {
    const complaintss = await Complaint.find();
    res.setHeader("Access-Control-Allow-Origin", HEADER_URL);

    return res.json(complaintss);
  } catch (error) {
    console.log(error);
  }
};

const getComplaint = async (req, res, next) => {
  try {
    const singleComplaint = await Complaint.findById(req.params.id);
    res.setHeader("Access-Control-Allow-Origin", HEADER_URL);

    return res.json(singleComplaint);
  } catch (error) {
    console.log(error);
  }
};

const updateComplaint = async (req, res, next) => {
  const {
    name,
    branch,
    CpersonName,
    ComplaintReference,
    acknowledgementFormat,
    levelofSecurity,
    natureofComplaint,
    employeeNameRelates,
    address,
    complaintRelateName,
    ComplaintName,
    DateResponse,
    complaintDate,
    ComplaintReceived,
    dob,
    ApprovedBy,
    ComplaintSummary,
    ResponseProvided,
    ProposedResponse,
    FindingsofInvestigation,
    OverviewofComplaint,
    EvidenceComplaint,
    investigate,
    InvestigationPlan,
  } = req.body;

  try {
    await Complaint.findByIdAndUpdate(req.params.id, {
      name,
      branch,
      CpersonName,
      ComplaintReference,
      acknowledgementFormat,
      levelofSecurity,
      natureofComplaint,
      employeeNameRelates,
      address,
      complaintRelateName,
      ComplaintName,
      DateResponse,
      complaintDate,
      ComplaintReceived,
      dob,
      ApprovedBy,
      ComplaintSummary,
      ResponseProvided,
      ProposedResponse,
      FindingsofInvestigation,
      OverviewofComplaint,
      EvidenceComplaint,
      investigate,
      InvestigationPlan,
    });
    res.setHeader("Access-Control-Allow-Origin", HEADER_URL);

    return res.status(200).json({ message: `Complaint updated successfully` });
  } catch (error) {
    next(error);
  }
};
const complaintsStatus = async (req, res, next) => {
  const { status } = req.body;
  try {
    await Complaint.findByIdAndUpdate(req.params.id, {
      status,
    });
    res.setHeader("Access-Control-Allow-Origin", HEADER_URL);

    return res
      .status(200)
      .json({ message: `Complaint Status updated successfully` });
  } catch (error) {
    next(error);
  }
};
const deleteComplaint = async (req, res, next) => {
  try {
    await Complaint.findByIdAndDelete(req.params.id);
    res.setHeader("Access-Control-Allow-Origin", HEADER_URL);

    return res.json({ message: `Complaint deleted successfully` });
  } catch (error) {
    next(error);
  }
};

export {
  deleteComplaint,
  updateComplaint,
  getALLComplaints,
  getComplaint,
  AddComplaint,
  complaintsStatus,
};
