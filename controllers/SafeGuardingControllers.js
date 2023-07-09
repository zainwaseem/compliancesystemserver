import { HEADER_URL } from "../HeaderUrl.js"
import SafeGuarding from "../models/SafeGuardingModel.js";

const AddSafeGuarding = async (req, res, next) => {
  try {
    const {
      serviceuser,
      
      branchName,
      personInvestigating,
      serviceuserLocation,
      timeIncident,
      dateIncident,
      locationIncident,
      detailsIncident,
      nameWitness,
      medicalAttention,
      resultInvestigating,
      NameDesignation,
      immediateAction,
      incidentInvestigation,
      agenciesContacted,
      RegisteredManager,
      furtherIncidents,
      Signature,
      Datecompletion,
    } = req.body;
    const newSafeGuarding = new SafeGuarding({
      serviceuser,
      branchName,
      personInvestigating,
      serviceuserLocation,
      timeIncident,
      dateIncident,
      locationIncident,
      detailsIncident,
      nameWitness,
      medicalAttention,
      resultInvestigating,
      NameDesignation,
      immediateAction,
      incidentInvestigation,
      agenciesContacted,
      RegisteredManager,
      furtherIncidents,
      Signature,
      Datecompletion,
    });
    await newSafeGuarding.save();
    res.setHeader(
      "Access-Control-Allow-Origin",
      HEADER_URL
    );

    return res.json({ message: "Record added successfully" });
  } catch (error) {
    next(error);
  }
};

const getALLSafeGuarding = async (req, res) => {
  try {
    const safeGuardings = await SafeGuarding.find();
    res.setHeader(
      "Access-Control-Allow-Origin",
      HEADER_URL
    );

    return res.json(safeGuardings);
  } catch (error) {
    console.log(error);
  }
};

const getSafeGuarding = async (req, res) => {
  try {
    const singleSafeGuarding = await SafeGuarding.findById(req.params.id);
    res.setHeader(
      "Access-Control-Allow-Origin",
      HEADER_URL
    );

    return res.json(singleSafeGuarding);
  } catch (error) {
    console.log(error);
  }
};

const updateSafeGuarding = async (req, res) => {
  const {
    serviceuser,
    branchName,
    personInvestigating,
    serviceuserLocation,
    timeIncident,
    dateIncident,
    locationIncident,
    detailsIncident,
    nameWitness,
    medicalAttention,
    resultInvestigating,
    NameDesignation,
    immediateAction,
    incidentInvestigation,
    agenciesContacted,
    RegisteredManager,
    furtherIncidents,
    Signature,
    Datecompletion,
  } = req.body;

  try {
    await SafeGuarding.findByIdAndUpdate(req.params.id, {
      serviceuser,
      branchName,
      personInvestigating,
      serviceuserLocation,
      timeIncident,
      dateIncident,
      locationIncident,
      detailsIncident,
      nameWitness,
      medicalAttention,
      resultInvestigating,
      NameDesignation,
      immediateAction,
      incidentInvestigation,
      agenciesContacted,
      RegisteredManager,
      furtherIncidents,
      Signature,
      Datecompletion,
    });
    res.setHeader(
      "Access-Control-Allow-Origin",
      HEADER_URL
    );

    return res.status(200).json({ message: `Record updated successfully` });
  } catch (error) {
    next(error);
  }
};
const deleteSafeGuarding = async (req, res) => {
  try {
    await SafeGuarding.findByIdAndDelete(req.params.id);
    res.setHeader(
      "Access-Control-Allow-Origin",
      HEADER_URL
    );

    return res.json({ message: `Deleted successfully` });
  } catch (error) {
    next(error);
  }
};

export {
  getALLSafeGuarding,
  AddSafeGuarding,
  getSafeGuarding,
  updateSafeGuarding,
  deleteSafeGuarding,
};
