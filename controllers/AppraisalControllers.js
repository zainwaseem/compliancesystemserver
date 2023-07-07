import Appraisal from "../models/AppraisalModel.js";

const AddAppraisal = async (req, res, next) => {
  try {
    const {
      Appraise,
      Jobtitle,
      Appraiser,
      currentposition,
      CompletionDate,
      CompletionTime,
      responsibilitiesDuties,
      partsJob,
      rows,
      TechnicalScore,
      TechnicalCom,
      LegalBestScore,
      LegalBestCom,
      CustomerRelationsScore,
      CustomerRelationsCom,
      TimeManagementScore,
      TimeManagementCom,
      CostControlScore,
      CostControlCom,
      ReportingAdministrationScore,
      ReportingAdministrationCom,
      CommunicationSkillsScore,
      CommunicationSkillsCom,
      DelegationSkillsScore,
      DelegationSkillsCom,
      ITScore,
      ITCom,
      AbilityScore,
      AbilityCom,
      ProblemScore,
      ProblemCom,
      TeamScore,
      TeamCom,
      EnergyScore,
      EnergyCom,
      SteadinessScore,
      SteadinessCom,
      AdaptabilityScore,
      AdaptabilityCom,
      PersonalScore,
      PersonalCom,
      specifyScore,
      specifyCom,
      particularproblems,
      lastappraisal,
      furthertraining,
      lacktraining,
      trainingcoaching,
      productivitycompliance,
      achieveambition,
      yourappraiser,
      CurrentBusiness,
      Recordgathered,
      rows1,
      TechnicalScore1,
      TechnicalCom1,
      LegalBestScore1,
      LegalBestCom1,
      CustomerRelationsScore1,
      CustomerRelationsCom1,
      TimeManagementScore1,
      TimeManagementCom1,
      CostControlScore1,
      CostControlCom1,
      ReportingAdministrationScore1,
      ReportingAdministrationCom1,
      CommunicationSkillsScore1,
      CommunicationSkillsCom1,
      DelegationSkillsScore1,
      DelegationSkillsCom1,
      ITScore1,
      ITCom1,
      AbilityScore1,
      AbilityCom1,
      ProblemScore1,
      ProblemCom1,
      TeamScore1,
      TeamCom1,
      EnergyScore1,
      EnergyCom1,
      SteadinessScore1,
      SteadinessCom1,
      AdaptabilityScore1,
      AdaptabilityCom1,
      PersonalScore1,
      PersonalCom1,
      specifyScore1,
      specifyCom1,
      Appraiseeimprove,
      DevelopmentTraining,
      JobDescription,
      Appraiserscomments,
      Appraiseecomments,
      SignatureAppraisee,
      SignatureAppraiser,
      Name,
      rows2,
    } = req.body;
    const newAppraisal = new Appraisal({
      Appraise,
      Jobtitle,
      Appraiser,
      currentposition,
      CompletionDate,
      CompletionTime,
      responsibilitiesDuties,
      partsJob,
      rows,
      TechnicalScore,
      TechnicalCom,
      LegalBestScore,
      LegalBestCom,
      CustomerRelationsScore,
      CustomerRelationsCom,
      TimeManagementScore,
      TimeManagementCom,
      CostControlScore,
      CostControlCom,
      ReportingAdministrationScore,
      ReportingAdministrationCom,
      CommunicationSkillsScore,
      CommunicationSkillsCom,
      DelegationSkillsScore,
      DelegationSkillsCom,
      ITScore,
      ITCom,
      AbilityScore,
      AbilityCom,
      ProblemScore,
      ProblemCom,
      TeamScore,
      TeamCom,
      EnergyScore,
      EnergyCom,
      SteadinessScore,
      SteadinessCom,
      AdaptabilityScore,
      AdaptabilityCom,
      PersonalScore,
      PersonalCom,
      specifyScore,
      specifyCom,
      particularproblems,
      lastappraisal,
      furthertraining,
      lacktraining,
      trainingcoaching,
      productivitycompliance,
      achieveambition,
      yourappraiser,
      CurrentBusiness,
      Recordgathered,
      rows1,
      TechnicalScore1,
      TechnicalCom1,
      LegalBestScore1,
      LegalBestCom1,
      CustomerRelationsScore1,
      CustomerRelationsCom1,
      TimeManagementScore1,
      TimeManagementCom1,
      CostControlScore1,
      CostControlCom1,
      ReportingAdministrationScore1,
      ReportingAdministrationCom1,
      CommunicationSkillsScore1,
      CommunicationSkillsCom1,
      DelegationSkillsScore1,
      DelegationSkillsCom1,
      ITScore1,
      ITCom1,
      AbilityScore1,
      AbilityCom1,
      ProblemScore1,
      ProblemCom1,
      TeamScore1,
      TeamCom1,
      EnergyScore1,
      EnergyCom1,
      SteadinessScore1,
      SteadinessCom1,
      AdaptabilityScore1,
      AdaptabilityCom1,
      PersonalScore1,
      PersonalCom1,
      specifyScore1,
      specifyCom1,
      Appraiseeimprove,
      DevelopmentTraining,
      JobDescription,
      Appraiserscomments,
      Appraiseecomments,
      SignatureAppraisee,
      SignatureAppraiser,
      Name,
      rows2,
    });
    await newAppraisal.save();
    return res.json({ message: "Appraisal added successfully" });
  } catch (error) {
    next(error);
  }
};

const getALLAppraisal = async (req, res) => {
  try {
    const Appraisals = await Appraisal.find();
    return res.json(Appraisals);
  } catch (error) {
    console.log(error);
  }
};

const getAppraisal = async (req, res) => {
  try {
    const singleAppraisal = await Appraisal.findById(req.params.id);
    return res.json(singleAppraisal);
  } catch (error) {
    console.log(error);
  }
};

const updateAppraisal = async (req, res) => {
  const {
    Appraise,
    Jobtitle,
    Appraiser,
    currentposition,
    CompletionDate,
    CompletionTime,
    responsibilitiesDuties,
    partsJob,
    rows,
    TechnicalScore,
    TechnicalCom,
    LegalBestScore,
    LegalBestCom,
    CustomerRelationsScore,
    CustomerRelationsCom,
    TimeManagementScore,
    TimeManagementCom,
    CostControlScore,
    CostControlCom,
    ReportingAdministrationScore,
    ReportingAdministrationCom,
    CommunicationSkillsScore,
    CommunicationSkillsCom,
    DelegationSkillsScore,
    DelegationSkillsCom,
    ITScore,
    ITCom,
    AbilityScore,
    AbilityCom,
    ProblemScore,
    ProblemCom,
    TeamScore,
    TeamCom,
    EnergyScore,
    EnergyCom,
    SteadinessScore,
    SteadinessCom,
    AdaptabilityScore,
    AdaptabilityCom,
    PersonalScore,
    PersonalCom,
    specifyScore,
    specifyCom,
    particularproblems,
    lastappraisal,
    furthertraining,
    lacktraining,
    trainingcoaching,
    productivitycompliance,
    achieveambition,
    yourappraiser,
    CurrentBusiness,
    Recordgathered,
    rows1,
    TechnicalScore1,
    TechnicalCom1,
    LegalBestScore1,
    LegalBestCom1,
    CustomerRelationsScore1,
    CustomerRelationsCom1,
    TimeManagementScore1,
    TimeManagementCom1,
    CostControlScore1,
    CostControlCom1,
    ReportingAdministrationScore1,
    ReportingAdministrationCom1,
    CommunicationSkillsScore1,
    CommunicationSkillsCom1,
    DelegationSkillsScore1,
    DelegationSkillsCom1,
    ITScore1,
    ITCom1,
    AbilityScore1,
    AbilityCom1,
    ProblemScore1,
    ProblemCom1,
    TeamScore1,
    TeamCom1,
    EnergyScore1,
    EnergyCom1,
    SteadinessScore1,
    SteadinessCom1,
    AdaptabilityScore1,
    AdaptabilityCom1,
    PersonalScore1,
    PersonalCom1,
    specifyScore1,
    specifyCom1,
    Appraiseeimprove,
    DevelopmentTraining,
    JobDescription,
    Appraiserscomments,
    Appraiseecomments,
    SignatureAppraisee,
    SignatureAppraiser,
    Name,
    rows2,
  } = req.body;

  try {
    await Appraisal.findByIdAndUpdate(req.params.id, {
      Appraise,
      Jobtitle,
      Appraiser,
      currentposition,
      CompletionDate,
      CompletionTime,
      responsibilitiesDuties,
      partsJob,
      rows,
      TechnicalScore,
      TechnicalCom,
      LegalBestScore,
      LegalBestCom,
      CustomerRelationsScore,
      CustomerRelationsCom,
      TimeManagementScore,
      TimeManagementCom,
      CostControlScore,
      CostControlCom,
      ReportingAdministrationScore,
      ReportingAdministrationCom,
      CommunicationSkillsScore,
      CommunicationSkillsCom,
      DelegationSkillsScore,
      DelegationSkillsCom,
      ITScore,
      ITCom,
      AbilityScore,
      AbilityCom,
      ProblemScore,
      ProblemCom,
      TeamScore,
      TeamCom,
      EnergyScore,
      EnergyCom,
      SteadinessScore,
      SteadinessCom,
      AdaptabilityScore,
      AdaptabilityCom,
      PersonalScore,
      PersonalCom,
      specifyScore,
      specifyCom,
      particularproblems,
      lastappraisal,
      furthertraining,
      lacktraining,
      trainingcoaching,
      productivitycompliance,
      achieveambition,
      yourappraiser,
      CurrentBusiness,
      Recordgathered,
      rows1,
      TechnicalScore1,
      TechnicalCom1,
      LegalBestScore1,
      LegalBestCom1,
      CustomerRelationsScore1,
      CustomerRelationsCom1,
      TimeManagementScore1,
      TimeManagementCom1,
      CostControlScore1,
      CostControlCom1,
      ReportingAdministrationScore1,
      ReportingAdministrationCom1,
      CommunicationSkillsScore1,
      CommunicationSkillsCom1,
      DelegationSkillsScore1,
      DelegationSkillsCom1,
      ITScore1,
      ITCom1,
      AbilityScore1,
      AbilityCom1,
      ProblemScore1,
      ProblemCom1,
      TeamScore1,
      TeamCom1,
      EnergyScore1,
      EnergyCom1,
      SteadinessScore1,
      SteadinessCom1,
      AdaptabilityScore1,
      AdaptabilityCom1,
      PersonalScore1,
      PersonalCom1,
      specifyScore1,
      specifyCom1,
      Appraiseeimprove,
      DevelopmentTraining,
      JobDescription,
      Appraiserscomments,
      Appraiseecomments,
      SignatureAppraisee,
      SignatureAppraiser,
      Name,
      rows2,
    });
    return res.status(200).json({ message: `Appraisal updated successfully` });
  } catch (error) {
    next(error);
  }
};
const deleteAppraisal = async (req, res) => {
  try {
    await Appraisal.findByIdAndDelete(req.params.id);
    return res.json({ message: `Appraisal deleted successfully` });
  } catch (error) {
    next(error);
  }
};

export {
  getALLAppraisal,
  AddAppraisal,
  getAppraisal,
  updateAppraisal,
  deleteAppraisal,
};