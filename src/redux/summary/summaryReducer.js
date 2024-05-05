import { SET_SUMMARY } from "./summaryTypes";

const serializedState = localStorage.getItem("myAppState");

export const summaryState = serializedState
  ? JSON.parse(serializedState).summary
  : {
      summary: ""
    };

const summaryReducer = (state = summaryState, action) => {
  switch (action.type) {
    case SET_SUMMARY:
      return {
        ...state,
        summary: action.payload.summary
      };
    default:
      return state;
  }
};

export default summaryReducer;
