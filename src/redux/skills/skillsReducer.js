import { SET_SKILLS } from "./skillsTypes";

const serializedState = localStorage.getItem("myAppState");

export const skillsState = serializedState
  ? JSON.parse(serializedState).skills
  : {
      skills: []
    };

const skillsReducer = (state = skillsState, action) => {
  switch (action.type) {
    case SET_SKILLS:
      return {
        ...state,
        skills: action.payload
      };
    default:
      return state;
  }
};

export default skillsReducer;
