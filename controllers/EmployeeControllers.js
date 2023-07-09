import Employee from "../models/EmployeeModel.js";

const AddEmployee = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const newEmployee = new Employee({
      name,
      email,
      phone,
    });
    await newEmployee.save();
        res.setHeader(
          "Access-Control-Allow-Origin",
          "https://compliancesys.netlify.app"
        );

    return res.json({ message: "Employee added successfully" });
  } catch (error) {
    next(error);
  }
};

const getALLEmployees = async (req, res) => {
  try {
    const allemployees = await Employee.find();
        res.setHeader(
          "Access-Control-Allow-Origin",
          "https://compliancesys.netlify.app"
        );

    return res.json(allemployees);
  } catch (error) {
    console.log(error);
  }
};

const getEmployee = async (req, res) => {
  try {
    const singleemp = await Employee.findById(req.params.id);
        res.setHeader(
          "Access-Control-Allow-Origin",
          "https://compliancesys.netlify.app"
        );

    return res.json(singleemp);
  } catch (error) {
    console.log(error);
  }
};
const updateEmployee = async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !phone || !email) {
    return res.json({ message: `Please fill the required fields` });
  }

  try {
    await Employee.findByIdAndUpdate(req.params.id, {
      name,
      email,
      phone,
    });
        res.setHeader(
          "Access-Control-Allow-Origin",
          "https://compliancesys.netlify.app"
        );

    return res.status(200).json({ message: `Employee updated successfully` });
  } catch (error) {
    next(error);
  }
};
const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
        res.setHeader(
          "Access-Control-Allow-Origin",
          "https://compliancesys.netlify.app"
        );

    return res.json({ message: `Employee deleted successfully` });
  } catch (error) {
    next(error);
  }
};

export {
  getALLEmployees,
  getEmployee,
  AddEmployee,
  updateEmployee,
  deleteEmployee,
};
