import { SET_EDUCATION } from "./educationTypes";

const serializedState = localStorage.getItem("myAppState");

export const educationState = serializedState
  ? JSON.parse(serializedState).education
  : {
      institute_name: "",
      location: "",
      degree: "",
      course: "",
      graduation_date: "",
      still_enrolled: false
    };

const educationReducer = (state = educationState, action) => {
  switch (action.type) {
    case SET_EDUCATION:
      return {
        ...state,
        institute_name: action.payload.institute_name,
        location: action.payload.location,
        degree: action.payload.degree,
        course: action.payload.course,
        graduation_date: action.payload.graduation_date,
        still_enrolled: action.payload.still_enrolled
      };
    default:
      return state;
  }
};

export default educationReducer;
