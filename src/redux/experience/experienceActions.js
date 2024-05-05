import { SET_EXPERIENCE } from "./experienceTypes";

export const setExperienceInfo = (experienceState) => {
  return {
    type: SET_EXPERIENCE,
    payload: experienceState
  };
};
