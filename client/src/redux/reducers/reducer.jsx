import * as actionType from "../actions/actionTypes";
import { getToken } from "../../services/authService";

const initialState = {
  loading: false,
  data: [],
  error: "",
  loggedIn: getToken() ? true : false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionType.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
        loggedIn: true
      };
    case actionType.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        loggedIn: false
      };
    case actionType.FETCH_ADD:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload],
        error: ""
      };
    case actionType.UPDATE_ERROR:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: action.payload.error
      };
    case actionType.TOGGLE_AUTH:
      return {
        ...state,
        loading: false,
        loggedIn: !state.loggedIn
      };
    default:
      return state;
  }
};
