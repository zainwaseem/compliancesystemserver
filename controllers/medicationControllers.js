import { HEADER_URL } from "../HeaderUrl.js"
import Medication from "../models/MedicationModel.js";

const AddMedication = async (req, res, next) => {
  try {
    const {
      pharmacy,
      branch,
      labelsprint,
      dosageclear,
      labelsdefaced,
      cautionswarnings,
      MDS,
      riskassessment,
      correctmedicine,
      medicinepolicy,
      allergies,
      dateAudit,
      drinkoffered,
      medicineexpiry,
      speicalinstructions,
      pharmacistGP,
      annualreview,
      capsules,
      raisedGP,
      auditplan,
      actionrequires,
    } = req.body;
    const newMedication = new Medication({
      pharmacy,
      branch,
      labelsprint,
      dosageclear,
      labelsdefaced,
      cautionswarnings,
      MDS,
      dateAudit,
      riskassessment,
      correctmedicine,
      medicinepolicy,
      allergies,
      drinkoffered,
      medicineexpiry,
      speicalinstructions,
      pharmacistGP,
      annualreview,
      capsules,
      raisedGP,
      auditplan,
      actionrequires,
    });
    await newMedication.save();
    res.setHeader(
      "Access-Control-Allow-Origin",
      HEADER_URL
    );

    return res.json({ message: "Medication added successfully" });
  } catch (error) {
    next(error);
  }
};

const getALLMedication = async (req, res) => {
  try {
    const Medications = await Medication.find();
    res.setHeader(
      "Access-Control-Allow-Origin",
      HEADER_URL
    );

    return res.json(Medications);
  } catch (error) {
    console.log(error);
  }
};

const getMedication = async (req, res) => {
  try {
    const singleMedication = await Medication.findById(req.params.id);
    res.setHeader(
      "Access-Control-Allow-Origin",
      HEADER_URL
    );

    return res.json(singleMedication);
  } catch (error) {
    console.log(error);
  }
};

const updateMedication = async (req, res) => {
  const {
    pharmacy,
    branch,
    labelsprint,
    dosageclear,
    labelsdefaced,
    cautionswarnings,
    MDS,
    dateAudit,
    riskassessment,
    correctmedicine,
    medicinepolicy,
    allergies,
    drinkoffered,
    medicineexpiry,
    speicalinstructions,
    pharmacistGP,
    annualreview,
    capsules,
    raisedGP,
    auditplan,
    actionrequires,
  } = req.body;

  try {
    await Medication.findByIdAndUpdate(req.params.id, {
      pharmacy,
      branch,
      dateAudit,
      labelsprint,
      dosageclear,
      labelsdefaced,
      cautionswarnings,
      MDS,
      riskassessment,
      correctmedicine,
      medicinepolicy,
      allergies,
      drinkoffered,
      medicineexpiry,
      speicalinstructions,
      pharmacistGP,
      annualreview,
      capsules,
      raisedGP,
      auditplan,
      actionrequires,
    });
    res.setHeader(
      "Access-Control-Allow-Origin",
      HEADER_URL
    );

    return res.status(200).json({ message: `Medication updated successfully` });
  } catch (error) {
    next(error);
  }
};
const deleteMedication = async (req, res) => {
  try {
    await Medication.findByIdAndDelete(req.params.id);
    res.setHeader(
      "Access-Control-Allow-Origin",
      HEADER_URL
    );

    return res.json({ message: `Medication deleted successfully` });
  } catch (error) {
    next(error);
  }
};

export {
  getALLMedication,
  AddMedication,
  getMedication,
  updateMedication,
  deleteMedication,
};
