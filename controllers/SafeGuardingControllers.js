import SafeGuarding from "../models/SafeGuardingModel.js";

const AddSafeGuarding = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const newSafeGuarding = new SafeGuarding({
      name,
      email,
      phone,
    });
    await newSafeGuarding.save();
    return res.json({ message: "Record added successfully" });
  } catch (error) {
    next(error);
  }
};

const getALLSafeGuarding = async (req, res) => {
  try {
    const safeGuardings = await SafeGuarding.find();
    return res.json(safeGuardings);
  } catch (error) {
    console.log(error);
  }
};

const getSafeGuarding = async (req, res) => {
  try {
    const singleSafeGuarding = await SafeGuarding.findById(req.params.id);
    return res.json(singleSafeGuarding);
  } catch (error) {
    console.log(error);
  }
};

const updateSafeGuarding = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    await SafeGuarding.findByIdAndUpdate(req.params.id, {
      name,
      email,
      phone,
    });
    return res.status(200).json({ message: `Record updated successfully` });
  } catch (error) {
    next(error);
  }
};
const deleteSafeGuarding = async (req, res) => {
  try {
    await SafeGuarding.findByIdAndDelete(req.params.id);
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
