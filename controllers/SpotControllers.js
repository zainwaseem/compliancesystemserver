import { HEADER_URL } from "../HeaderUrl.js";
import Spot from "../models/SpotModel.js";

const AddSpot = async (req, res, next) => {
  try {
    const {
      serviceuser,
      address,
      branch,
      Mobile,
      NumberofHoursWeek,
      NumberofVisitsWeek,
      NumberofCareWorkersWeek,
      NameofAssessor,
      ReasonforSpotCheck,
      SpotCheckAttendee,
      DateofSpotCheck,
      TimeofSpotCheck,
      ArrivalTime,
      DepartureTime,
      Carerarrive,
      CarerhavetheKeys,
      Carerdresssmartly,
      saysHelloService,
      IDBadge,
      electronicmonitoring,
      ServiceUserplan,
      VisitNotesarrival,
      seektheService,
      ServiceUserneeds,
      Carerwashtheirhands,
      PPEcorrectly,
      foodhandledcorrectly,
      PPEdisposed,
      MARchart,
      Carerfollow,
      Carercommunicate,
      Carerrespectprivacy,
      Carerrespectthedignity,
      CarerallowService,
      Carerworkenabling,
      Careraccuratelyrecord,
      Carerlogoutcorrectly,
      wearidentification,
      wearglovesplasticaprons,
      treatwithdignity,
      feelcomfortablesafe,
      carercomeontime,
      makecomplaint,
      complaintresolved,
      feelCareServices,
      happycare,
      Carercomingvisit,
      RecordActionsoutcome,
    } = req.body;
    const newMedication = new Spot({
      serviceuser,
      branch,
      address,
      Mobile,
      NumberofHoursWeek,
      NumberofVisitsWeek,
      NumberofCareWorkersWeek,
      NameofAssessor,
      ReasonforSpotCheck,
      SpotCheckAttendee,
      DateofSpotCheck,
      TimeofSpotCheck,
      ArrivalTime,
      DepartureTime,
      Carerarrive,
      CarerhavetheKeys,
      Carerdresssmartly,
      saysHelloService,
      IDBadge,
      electronicmonitoring,
      ServiceUserplan,
      VisitNotesarrival,
      seektheService,
      ServiceUserneeds,
      Carerwashtheirhands,
      PPEcorrectly,
      foodhandledcorrectly,
      PPEdisposed,
      MARchart,
      Carerfollow,
      Carercommunicate,
      Carerrespectprivacy,
      Carerrespectthedignity,
      CarerallowService,
      Carerworkenabling,
      Careraccuratelyrecord,
      Carerlogoutcorrectly,
      wearidentification,
      wearglovesplasticaprons,
      treatwithdignity,
      feelcomfortablesafe,
      carercomeontime,
      makecomplaint,
      complaintresolved,
      feelCareServices,
      happycare,
      Carercomingvisit,
      RecordActionsoutcome,
    });
    await newMedication.save();
    res.setHeader("Access-Control-Allow-Origin", HEADER_URL);

    return res.json({ message: "Added successfully" });
  } catch (error) {
    next(error);
  }
};

const getALLSpot = async (req, res) => {
  try {
    const spots = await Spot.find();
    res.setHeader("Access-Control-Allow-Origin", HEADER_URL);

    return res.json(spots);
  } catch (error) {
    console.log(error);
  }
};

const getSpot = async (req, res) => {
  try {
    const singleMedication = await Spot.findById(req.params.id);
    res.setHeader("Access-Control-Allow-Origin", HEADER_URL);

    return res.json(singleMedication);
  } catch (error) {
    console.log(error);
  }
};

const updateSpot = async (req, res) => {
  const {
    serviceuser,
    address,
    branch,
    Mobile,
    NumberofHoursWeek,
    NumberofVisitsWeek,
    NumberofCareWorkersWeek,
    NameofAssessor,
    ReasonforSpotCheck,
    SpotCheckAttendee,
    DateofSpotCheck,
    TimeofSpotCheck,
    ArrivalTime,
    DepartureTime,
    Carerarrive,
    CarerhavetheKeys,
    Carerdresssmartly,
    saysHelloService,
    IDBadge,
    electronicmonitoring,
    ServiceUserplan,
    VisitNotesarrival,
    seektheService,
    ServiceUserneeds,
    Carerwashtheirhands,
    PPEcorrectly,
    foodhandledcorrectly,
    PPEdisposed,
    MARchart,
    Carerfollow,
    Carercommunicate,
    Carerrespectprivacy,
    Carerrespectthedignity,
    CarerallowService,
    Carerworkenabling,
    Careraccuratelyrecord,
    Carerlogoutcorrectly,
    wearidentification,
    wearglovesplasticaprons,
    treatwithdignity,
    feelcomfortablesafe,
    carercomeontime,
    makecomplaint,
    complaintresolved,
    feelCareServices,
    happycare,
    Carercomingvisit,
    RecordActionsoutcome,
  } = req.body;

  try {
    await Spot.findByIdAndUpdate(req.params.id, {
      serviceuser,
      address,
      Mobile,
      branch,
      NumberofHoursWeek,
      NumberofVisitsWeek,
      NumberofCareWorkersWeek,
      NameofAssessor,
      ReasonforSpotCheck,
      SpotCheckAttendee,
      DateofSpotCheck,
      TimeofSpotCheck,
      ArrivalTime,
      DepartureTime,
      Carerarrive,
      CarerhavetheKeys,
      Carerdresssmartly,
      saysHelloService,
      IDBadge,
      electronicmonitoring,
      ServiceUserplan,
      VisitNotesarrival,
      seektheService,
      ServiceUserneeds,
      Carerwashtheirhands,
      PPEcorrectly,
      foodhandledcorrectly,
      PPEdisposed,
      MARchart,
      Carerfollow,
      Carercommunicate,
      Carerrespectprivacy,
      Carerrespectthedignity,
      CarerallowService,
      Carerworkenabling,
      Careraccuratelyrecord,
      Carerlogoutcorrectly,
      wearidentification,
      wearglovesplasticaprons,
      treatwithdignity,
      feelcomfortablesafe,
      carercomeontime,
      makecomplaint,
      complaintresolved,
      feelCareServices,
      happycare,
      Carercomingvisit,
      RecordActionsoutcome,
    });
    res.setHeader("Access-Control-Allow-Origin", HEADER_URL);

    return res.status(200).json({ message: `Updated successfully` });
  } catch (error) {
    next(error);
  }
};
const deleteSpot = async (req, res) => {
  try {
    await Spot.findByIdAndDelete(req.params.id);
    return res.json({ message: `Deleted successfully` });
  } catch (error) {
    next(error);
  }
};

export { getALLSpot, AddSpot, getSpot, updateSpot, deleteSpot };
