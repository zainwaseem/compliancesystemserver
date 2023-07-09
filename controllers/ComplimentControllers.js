import { HEADER_URL } from "../HeaderUrl.js";
import Compliment from "../models/ComplimentModel.js";

const AddCompliment = async (req, res, next) => {
  try {
    const {
      branch,
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
      branch,
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
    res.setHeader("Access-Control-Allow-Origin", HEADER_URL);

    return res.json({ message: "Compliment added successfully" });
  } catch (error) {
    next(error);
  }
};

const getALLCompliments = async (req, res) => {
  try {
    const Compliments = await Compliment.find();
    res.setHeader("Access-Control-Allow-Origin", HEADER_URL);

    return res.json(Compliments);
  } catch (error) {
    console.log(error);
  }
};

const getCompliment = async (req, res) => {
  try {
    const singlecompliment = await Compliment.findById(req.params.id);
    res.setHeader("Access-Control-Allow-Origin", HEADER_URL);

    return res.json(singlecompliment);
  } catch (error) {
    console.log(error);
  }
};

const updateCompliment = async (req, res) => {
  const {
    name,
    branch,
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
      branch,
      complimentDate,
      complimentReceived,
      natureOfCompliment,
      levelofSecurity,
      acknowledgedFormat,
      employeeAgainst,
      complimentAction,
      complimentSummary,
    });
    res.setHeader("Access-Control-Allow-Origin", HEADER_URL);

    return res.status(200).json({ message: `Compliment updated successfully` });
  } catch (error) {
    next(error);
  }
};
const deleteCompliment = async (req, res) => {
  try {
    await Compliment.findByIdAndDelete(req.params.id);
    res.setHeader("Access-Control-Allow-Origin", HEADER_URL);

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
