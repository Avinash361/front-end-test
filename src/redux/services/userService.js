import api from "./api";

// Educator, Student Table
const login = (username, password) => {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  return true;
}

const getEducatorsData = () => {
  return api.get("EducatorProfile/SearchEducatorProfiles?isActive=true&isDeleted=false&pageSize=10&pageNo=1",);
};
const getStudentsData = () => {
  return api.get("StudentProfile/SearchStudentProfiles?isActive=true&isDeleted=false&pageSize=10&pageNo=1");
};
const UpdateStudentProfile = (inputs) => {
  return api.post("StudentProfile/UpdateStudentProfile", inputs);
}
//  Question Api
const getQuestion = (pageNo, approved, filter) => {
  return api.get(`/Question/SearchQuestions?pageNo=${pageNo}&pageSize=10&boardOrUniversityId=${filter.boardOrUniversityId}&mediumId=${filter.mediumId}&classId=${filter.classId}&subjectId=${filter.subjectId}&difficultyLevelId=${filter.difficultyLevelId}&isApproved=${approved}`);
};
const approveQuestion = (inputs) => {
  return api.post("Question/ApproveQuestion", inputs);
};
const BulkUploadQuestions = (inputs) => {
  return api.post('Question/BulkUploadQuestions', inputs);
}

// Points/Reward Api
const GetPointsDefinition = () => {
  return api.get(`PointsDefinition/GetPointsDefinition`);
};
const UpdatePoints = (inputs) => {
  return api.post(`PointsDefinition/CreateOrUpdate`, inputs);
};


// Schedle Api
const getScheduleTypes = () => {
  return api.get(`AatmnirbharTypes/GetScheduleTypes`);
}
const GetAllAssessmentSchedules = () => {
  return api.get(`AssessmentSchedule/GetAllAssessmentSchedules`);
}
const AddAssessmentSchedule = (inputs) => {
  return api.post('AssessmentSchedule/AddAssessmentSchedule', inputs);
}
const UpdateAssessmentSchedule = (inputs) => {
  return api.post('AssessmentSchedule/UpdateAssessmentSchedule', inputs);
}
const DeleteAssessmentSchedule = (input) => {
  return api.post('AssessmentSchedule/DeleteAssessmentSchedule', input);
}
const SetupAssessment = () => {
  return api.post('Assessment/SetupAssessment');
}

// Board Api
const GetBoard = () => {
  return api.get("EducationalOrganization/GetAllBoardsOrUniversities?isActive=true");
};
const AddBoard = (inputs) => {
  return api.post("EducationalOrganization/AddBoardOrUniversity", inputs);
}
const UpdateBoard = (inputs) => {
  return api.post("EducationalOrganization/UpdateBoardOrUniversity", inputs);
}

// Medium Api
const GetMedium = () => {
  return api.get("Medium/GetAllMediums?isActive=true");
};
const AddMedium = (inputs) => {
  return api.post("Medium/AddMedium", inputs);
}
const UpdateMedium = (inputs) => {
  return api.post("Medium/UpdateMedium", inputs);
}

// Class Api
const GetClass = () => {
  return api.get("Class/GetAllClasses?isActive=true");
};
const AddClass = (inputs) => {
  return api.post('Class/AddClass', inputs);
}
const UpdateClass = (inputs) => {
  return api.post('Class/UpdateClass', inputs);
}

// Subject Api
const GetSubject = () => {
  return api.get("Subject/GetAllSubjects?isActive=true");
};
const AddSubject = (inputs) => {
  return api.post('Subject/AddSubject', inputs);
}
const UpdateSubject = (inputs) => {
  return api.post('Subject/UpdateSubject', inputs);
}

// Level Api
const GetDifficultyLevel = () => {
  return api.get("DifficlutyLevel/GetDifficultyLevels");
};
const AddDifficultyLevel = (inputs) => {
  return api.post('DifficlutyLevel/AddDifficultyLevel', inputs);
}
const UpdateDifficultyLevel = (inputs) => {
  return api.post('DifficlutyLevel/UpdateDifficultyLevel', inputs);
}

const GetAllStates = () => {
  return api.get('State/GetAllStates');
}
const AddStates = (input) => {
  return api.post('State/AddState', input);
}
const UpdateStates = (input) => {
  return api.post('State/UpdateState', input);
}

export default {
  login,

  getEducatorsData,
  getStudentsData,
  UpdateStudentProfile,

  GetBoard,
  AddBoard,
  UpdateBoard,

  GetMedium,
  AddMedium,
  UpdateMedium,

  GetClass,
  AddClass,
  UpdateClass,

  GetSubject,
  AddSubject,
  UpdateSubject,

  GetDifficultyLevel,
  AddDifficultyLevel,
  UpdateDifficultyLevel,

  GetAllStates,
  AddStates,
  UpdateStates,

  getQuestion,
  approveQuestion,
  BulkUploadQuestions,

  GetPointsDefinition,
  UpdatePoints,

  getScheduleTypes,
  GetAllAssessmentSchedules,
  AddAssessmentSchedule,
  UpdateAssessmentSchedule,
  DeleteAssessmentSchedule,
  SetupAssessment,

};