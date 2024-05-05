import { SET_HEADER_INFO } from "./headerTypes";

const serializedState = localStorage.getItem("myAppState");

export const headerState = serializedState
  ? JSON.parse(serializedState).header
  : {
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      country: "",
      address: "",
      city: "",
      state: "",
      pincode: ""
    };

const headerReducer = (state = headerState, action) => {
  switch (action.type) {
    case SET_HEADER_INFO:
      return {
        ...state,
        fname: action.payload.fname,
        lname: action.payload.lname,
        email: action.payload.email,
        mobile: action.payload.mobile,
        country: action.payload.country,
        address: action.payload.address,
        city: action.payload.city,
        state: action.payload.state,
        pincode: action.payload.pincode
      };
    default:
      return state;
  }
};

export default headerReducer;
