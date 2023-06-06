import Compliment from "../models/ComplimentModel.js";

const AddCompliment = async (req, res, next) => {
  try {
    const {
      name,
      complimentDate,
      complimentReceived,
      natureOfCompliment,
      levelofSecurity,
      acknowledgedFormat,
      employeeAgainst,
      complimentAction,
      complimentSummary,
    } = req.body;
    const newCompliment = new Compliment({
      name,
      complimentDate,
      complimentReceived,
      natureOfCompliment,
      levelofSecurity,
      acknowledgedFormat,
      employeeAgainst,
      complimentAction,
      complimentSummary,
    });
    await newCompliment.save();
    return res.json({ message: "Compliment added successfully" });
  } catch (error) {
    next(error);
  }
};

const getALLCompliments = async (req, res) => {
  try {
    const Compliments = await Compliment.find();
    return res.json(Compliments);
  } catch (error) {
    console.log(error);
  }
};

const getCompliment = async (req, res) => {
  try {
    const Compliment = await Compliment.findById(req.params.id);
    return res.json(Compliment);
  } catch (error) {
    console.log(error);
  }
};

const updateCompliment = async (req, res) => {
  const {
    name,
    complimentDate,
    complimentReceived,
    natureOfCompliment,
    levelofSecurity,
    acknowledgedFormat,
    employeeAgainst,
    complimentAction,
    complimentSummary,
  } = req.body;

  try {
    await Compliment.findByIdAndUpdate(req.params.id, {
      name,
      complimentDate,
      complimentReceived,
      natureOfCompliment,
      levelofSecurity,
      acknowledgedFormat,
      employeeAgainst,
      complimentAction,
      complimentSummary,
    });
    return res.status(200).json({ message: `Compliment updated successfully` });
  } catch (error) {
    next(error);
  }
};
const deleteCompliment = async (req, res) => {
  try {
    await Compliment.findByIdAndDelete(req.params.id);
    return res.json({ message: `Compliment deleted successfully` });
  } catch (error) {
    next(error);
  }
};

export {
  getALLCompliments,
  AddCompliment,
  getCompliment,
  updateCompliment,
  deleteCompliment,
};
