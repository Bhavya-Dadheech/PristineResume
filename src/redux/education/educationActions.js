import { SET_EDUCATION } from "./educationTypes";

export const setEducation = (educationState) => {
  return {
    type: SET_EDUCATION,
    payload: educationState
  };
};
