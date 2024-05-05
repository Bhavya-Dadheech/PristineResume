import { SET_EXPERIENCE } from "./experienceTypes";

const serializedState = localStorage.getItem("myAppState");

export const experienceState = serializedState
  ? JSON.parse(serializedState).experience
  : {
      job_title: "",
      employer: "",
      city: "",
      country: "",
      start_date: "",
      end_date: "",
      still_work_here: false
    };

const experienceReducer = (state = experienceState, action) => {
  switch (action.type) {
    case SET_EXPERIENCE:
      return {
        ...state,
        job_title: action.payload.job_title,
        employer: action.payload.employer,
        city: action.payload.city,
        country: action.payload.country,
        start_date: action.payload.start_date,
        end_date: action.payload.end_date,
        still_work_here: action.payload.still_work_here
      };
    default:
      return state;
  }
};

export default experienceReducer;
