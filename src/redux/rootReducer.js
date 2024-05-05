import { combineReducers } from "redux";
import headerReducer from "./header/headerReducer";
import educationReducer from "./education/educationReducer";
import skillsReducer from "./skills/skillsReducer";
import experienceReducer from "./experience/experienceReducer";
import projectReducer from "./projects/projectsReducer";
import summaryReducer from "./summary/summaryReducer";

const rootReducer = combineReducers({
  header: headerReducer,
  education: educationReducer,
  skills: skillsReducer,
  experience: experienceReducer,
  project: projectReducer,
  summary: summaryReducer
});

export default rootReducer;
