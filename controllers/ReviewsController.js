import Review from "../models/ReviewsModel.js";

const AddReview = async (req, res, next) => {
  try {
    const {
      serviceuser,
      address,
      namesignature,
      banchaname,
      Datereview,
      citizens,
      goodcarequality,
      workerarrive,
      workervisit,
      Idbadge,
      neatpresentatble,
      sayhello,
      carereliable,
      timeexpected,
      enoughtime,
      rashedearly,
      talktome,
      doeverything,
      knowledgeable,
      listentome,
      feesafe,
      securehome,
      dietaryneeds,
      supportplan,
      branchstaff,
      raisecompliment,
      outofoffice,
      docallme,
      servicerecived,
      needsimprovement,
      recommended,
      branchactions,
    } = req.body;
    const newMedication = new Review({
      serviceuser,
      address,
      namesignature,
      banchaname,
      Datereview,
      citizens,
      goodcarequality,
      workerarrive,
      workervisit,
      Idbadge,
      neatpresentatble,
      sayhello,
      carereliable,
      timeexpected,
      enoughtime,
      rashedearly,
      talktome,
      doeverything,
      knowledgeable,
      listentome,
      feesafe,
      securehome,
      dietaryneeds,
      supportplan,
      branchstaff,
      raisecompliment,
      outofoffice,
      docallme,
      servicerecived,
      needsimprovement,
      recommended,
      branchactions,
    });
    await newMedication.save();
        res.setHeader(
          "Access-Control-Allow-Origin",
          "https://compliancesys.netlify.app"
        );

    return res.json({ message: "Added successfully" });
  } catch (error) {
    next(error);
  }
};

const getALLReview = async (req, res) => {
  try {
    const Reviews = await Review.find();
        res.setHeader(
          "Access-Control-Allow-Origin",
          "https://compliancesys.netlify.app"
        );

    return res.json(Reviews);
  } catch (error) {
    console.log(error);
  }
};

const getReview = async (req, res) => {
  try {
    const singleMedication = await Review.findById(req.params.id);
        res.setHeader(
          "Access-Control-Allow-Origin",
          "https://compliancesys.netlify.app"
        );

    return res.json(singleMedication);
  } catch (error) {
    console.log(error);
  }
};

const updateReview = async (req, res) => {
  const {
    serviceuser,
    address,
    namesignature,
    banchaname,
    Datereview,
    citizens,
    goodcarequality,
    workerarrive,
    workervisit,
    Idbadge,
    neatpresentatble,
    sayhello,
    carereliable,
    timeexpected,
    enoughtime,
    rashedearly,
    talktome,
    doeverything,
    knowledgeable,
    listentome,
    feesafe,
    securehome,
    dietaryneeds,
    supportplan,
    branchstaff,
    raisecompliment,
    outofoffice,
    docallme,
    servicerecived,
    needsimprovement,
    recommended,
    branchactions,
  } = req.body;

  try {
    await Review.findByIdAndUpdate(req.params.id, {
      serviceuser,
      address,
      namesignature,
      banchaname,
      Datereview,
      citizens,
      goodcarequality,
      workerarrive,
      workervisit,
      Idbadge,
      neatpresentatble,
      sayhello,
      carereliable,
      timeexpected,
      enoughtime,
      rashedearly,
      talktome,
      doeverything,
      knowledgeable,
      listentome,
      feesafe,
      securehome,
      dietaryneeds,
      supportplan,
      branchstaff,
      raisecompliment,
      outofoffice,
      docallme,
      servicerecived,
      needsimprovement,
      recommended,
      branchactions,
    });
        res.setHeader(
          "Access-Control-Allow-Origin",
          "https://compliancesys.netlify.app"
        );

    return res.status(200).json({ message: `Updated successfully` });
  } catch (error) {
    next(error);
  }
};
const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
        res.setHeader(
          "Access-Control-Allow-Origin",
          "https://compliancesys.netlify.app"
        );

    return res.json({ message: `Deleted successfully` });
  } catch (error) {
    next(error);
  }
};

export { getALLReview, AddReview, getReview, updateReview, deleteReview };
