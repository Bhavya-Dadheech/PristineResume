import { SET_SKILLS } from "./skillsTypes";

export const setSkills = (skillsState) => {
  return {
    type: SET_SKILLS,
    payload: skillsState
  };
};
