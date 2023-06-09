import mongoose from "mongoose";
const spotSchema = new mongoose.Schema(
  {
    serviceuser: { type: String },
    branch: { type: String },

    address: { type: String },
    Mobile: { type: String },
    NumberofHoursWeek: { type: String },
    NumberofVisitsWeek: { type: String },
    NumberofCareWorkersWeek: { type: String },
    NameofAssessor: { type: String },
    ReasonforSpotCheck: { type: String },
    SpotCheckAttendee: { type: String },
    DateofSpotCheck: { type: String },
    TimeofSpotCheck: { type: String },
    ArrivalTime: { type: String },
    DepartureTime: { type: String },
    Carerarrive: { type: String },
    CarerhavetheKeys: { type: String },
    Carerdresssmartly: { type: String },
    saysHelloService: { type: String },
    IDBadge: { type: String },
    electronicmonitoring: { type: String },
    ServiceUserplan: { type: String },
    VisitNotesarrival: { type: String },
    seektheService: { type: String },
    ServiceUserneeds: { type: String },
    Carerwashtheirhands: { type: String },
    PPEcorrectly: { type: String },
    foodhandledcorrectly: { type: String },
    PPEdisposed: { type: String },
    MARchart: { type: String },
    Carerfollow: { type: String },
    Carercommunicate: { type: String },
    Carerrespectprivacy: { type: String },
    Carerrespectthedignity: { type: String },
    CarerallowService: { type: String },
    Carerworkenabling: { type: String },
    Careraccuratelyrecord: { type: String },
    Carerlogoutcorrectly: { type: String },
    wearidentification: { type: String },
    wearglovesplasticaprons: { type: String },
    treatwithdignity: { type: String },
    feelcomfortablesafe: { type: String },
    carercomeontime: { type: String },
    makecomplaint: { type: String },
    complaintresolved: { type: String },
    feelCareServices: { type: String },
    happycare: { type: String },
    Carercomingvisit: { type: String },
    RecordActionsoutcome: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Spot", spotSchema);
