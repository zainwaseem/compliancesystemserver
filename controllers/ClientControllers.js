import Client from "../models/ClientModel.js";

const AddClient = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const newClient = new Client({
      name,
      email,
      phone,
    });
    await newClient.save();
    return res.json({ message: "Client added successfully" });
  } catch (error) {
    next(error);
  }
};

const getALLClients = async (req, res) => {
  try {
    const Clients = await Client.find();
    return res.json(Clients);
  } catch (error) {
    console.log(error);
  }
};

const getClient = async (req, res) => {
  try {
    const singleClient = await Client.findById(req.params.id);
    return res.json(singleClient);
  } catch (error) {
    console.log(error);
  }
};

const updateClient = async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !phone || !email) {
    return res.json({ message: `Please fill the required fields` });
  }

  try {
    await Client.findByIdAndUpdate(req.params.id, {
      name,
      email,
      phone,
    });
    return res.status(200).json({ message: `Client updated successfully` });
  } catch (error) {
    next(error);
  }
};
const deleteClient = async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    return res.json({ message: `Client deleted successfully` });
  } catch (error) {
    next(error);
  }
};

export { getALLClients, AddClient, getClient, updateClient, deleteClient };
