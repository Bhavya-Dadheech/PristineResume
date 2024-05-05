import { SET_PROJECTS } from "./projectsTypes";

export const setProjectInfo = (projectState) => {
  return {
    type: SET_PROJECTS,
    payload: projectState
  };
};
