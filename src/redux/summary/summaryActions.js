import { SET_SUMMARY } from "./summaryTypes";

export const setSummary = (summaryState) => {
  return {
    type: SET_SUMMARY,
    payload: summaryState
  };
};
