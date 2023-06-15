import Safe from "../models/SafeModel.js";

const AddSafe = async (req, res, next) => {
  try {
    const {
      serviceuser,
      address,
      Mobile,
      CarepurchasedPrivately,
      Carepackage,
      managerforassessment,
      caresupportplan,
      informationrequire,
      contactoffice,
      courteousreply,
      promptlysympatheticall,
      happywithservice,
      difficultservice,
      Careplanuptodate,
      workersarrivetime,
      wearuniform,
      identitybadges,
      allocatedtime,
      dutiessatisfaction,
      workerscourteous,
      Supportworkerexpect,
      workerallocatedtimes,
      makecomplaint,
      fearrecrimination,
      evercomplaint,
      remainconfidential,
      ReportBook,
      recommendPBLCare,
      correctinvoices,
      invoicedetailseasily,
      queryinvoice,
      dealtpromptly,
      Generalcomments,
      ActionPlans,
      RepresentativeSigDate,
      ManagerSignatureDate,
    } = req.body;
    const newMedication = new Safe({
      serviceuser,
      address,
      Mobile,
      CarepurchasedPrivately,
      Carepackage,
      managerforassessment,
      caresupportplan,
      informationrequire,
      contactoffice,
      courteousreply,
      promptlysympatheticall,
      happywithservice,
      difficultservice,
      Careplanuptodate,
      workersarrivetime,
      wearuniform,
      identitybadges,
      allocatedtime,
      dutiessatisfaction,
      workerscourteous,
      Supportworkerexpect,
      workerallocatedtimes,
      makecomplaint,
      fearrecrimination,
      evercomplaint,
      remainconfidential,
      ReportBook,
      recommendPBLCare,
      correctinvoices,
      invoicedetailseasily,
      queryinvoice,
      dealtpromptly,
      Generalcomments,
      ActionPlans,
      RepresentativeSigDate,
      ManagerSignatureDate,
    });
    await newMedication.save();
    return res.json({ message: "Added successfully" });
  } catch (error) {
    next(error);
  }
};

const getALLSafe = async (req, res) => {
  try {
    const safes = await Safe.find();
    return res.json(safes);
  } catch (error) {
    console.log(error);
  }
};

const getSafe = async (req, res) => {
  try {
    const singlesafe = await Safe.findById(req.params.id);
    return res.json(singlesafe);
  } catch (error) {
    console.log(error);
  }
};

const updateSafe = async (req, res) => {
  const {
    serviceuser,
    address,
    Mobile,
    CarepurchasedPrivately,
    Carepackage,
    managerforassessment,
    caresupportplan,
    informationrequire,
    contactoffice,
    courteousreply,
    promptlysympatheticall,
    happywithservice,
    difficultservice,
    Careplanuptodate,
    workersarrivetime,
    wearuniform,
    identitybadges,
    allocatedtime,
    dutiessatisfaction,
    workerscourteous,
    Supportworkerexpect,
    workerallocatedtimes,
    makecomplaint,
    fearrecrimination,
    evercomplaint,
    remainconfidential,
    ReportBook,
    recommendPBLCare,
    correctinvoices,
    invoicedetailseasily,
    queryinvoice,
    dealtpromptly,
    Generalcomments,
    ActionPlans,
    RepresentativeSigDate,
    ManagerSignatureDate,
  } = req.body;

  try {
    await Safe.findByIdAndUpdate(req.params.id, {
      serviceuser,
      address,
      Mobile,
      CarepurchasedPrivately,
      Carepackage,
      managerforassessment,
      caresupportplan,
      informationrequire,
      contactoffice,
      courteousreply,
      promptlysympatheticall,
      happywithservice,
      difficultservice,
      Careplanuptodate,
      workersarrivetime,
      wearuniform,
      identitybadges,
      allocatedtime,
      dutiessatisfaction,
      workerscourteous,
      Supportworkerexpect,
      workerallocatedtimes,
      makecomplaint,
      fearrecrimination,
      evercomplaint,
      remainconfidential,
      ReportBook,
      recommendPBLCare,
      correctinvoices,
      invoicedetailseasily,
      queryinvoice,
      dealtpromptly,
      Generalcomments,
      ActionPlans,
      RepresentativeSigDate,
      ManagerSignatureDate,
    });
    return res.status(200).json({ message: `Updated successfully` });
  } catch (error) {
    next(error);
  }
};
const deleteSafe = async (req, res) => {
  try {
    await Safe.findByIdAndDelete(req.params.id);
    return res.json({ message: `Deleted successfully` });
  } catch (error) {
    next(error);
  }
};

export { getALLSafe, AddSafe, getSafe, updateSafe, deleteSafe };
