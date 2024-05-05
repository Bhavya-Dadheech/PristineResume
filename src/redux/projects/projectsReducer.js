import { SET_PROJECTS } from "./projectsTypes";

const serializedState = localStorage.getItem("myAppState");

export const projectState = serializedState
  ? JSON.parse(serializedState).project
  : {
      project_title: "",
      tech_stack: "",
      start_date: "",
      end_date: "",
      description: ""
    };

const projectReducer = (state = projectState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        project_title: action.payload.project_title,
        tech_stack: action.payload.tech_stack,
        start_date: action.payload.start_date,
        end_date: action.payload.end_date,
        description: action.payload.description
      };
    default:
      return state;
  }
};

export default projectReducer;
