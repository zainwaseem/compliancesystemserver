import Medication from "../models/MedicationModel.js";

const AddMedication = async (req, res, next) => {
  try {
    const {
      pharmacy,
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
    } = req.body;
    const newMedication = new Medication({
      pharmacy,
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
    await newMedication.save();
    return res.json({ message: "Medication added successfully" });
  } catch (error) {
    next(error);
  }
};

const getALLMedication = async (req, res) => {
  try {
    const Medications = await Medication.find();
    return res.json(Medications);
  } catch (error) {
    console.log(error);
  }
};

const getMedication = async (req, res) => {
  try {
    const singleMedication = await Medication.findById(req.params.id);
    return res.json(singleMedication);
  } catch (error) {
    console.log(error);
  }
};

const updateMedication = async (req, res) => {
  const {
    pharmacy,
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
  } = req.body;

  try {
    await Medication.findByIdAndUpdate(req.params.id, {
      pharmacy,
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
    return res.status(200).json({ message: `Medication updated successfully` });
  } catch (error) {
    next(error);
  }
};
const deleteMedication = async (req, res) => {
  try {
    await Medication.findByIdAndDelete(req.params.id);
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
