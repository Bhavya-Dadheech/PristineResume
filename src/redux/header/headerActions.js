import { SET_HEADER_INFO } from "./headerTypes";

export const setHeaderInfo = (headerState) => {
  return {
    type: SET_HEADER_INFO,
    payload: headerState
  };
};
