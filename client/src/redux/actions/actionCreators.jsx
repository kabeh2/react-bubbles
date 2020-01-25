import axios from "axios";
import * as actionType from "./actionTypes";
import {
  apiEndpoint,
  setToken,
  axiosAuth,
  removeToken
} from "../../services/authService";

export const fetchRequest = () => ({
  type: actionType.FETCH_REQUEST
});

export const fetchSuccess = data => ({
  type: actionType.FETCH_SUCCESS,
  payload: data
});

export const fetchError = error => ({
  type: actionType.FETCH_ERROR,
  payload: error
});

export const login = credentials => {
  return async dispatch => {
    await dispatch(fetchRequest());

    try {
      const { data } = await axios.post(`${apiEndpoint}/login`, credentials);
      setToken(data.payload);
    } catch (error) {
      await dispatch(fetchError(error.message));
    }
  };
};

export const toggleAuth = () => ({
  type: actionType.TOGGLE_AUTH
});

export const logout = () => {
  return dispatch => {
    dispatch(fetchRequest());

    try {
      removeToken();
      dispatch(toggleAuth());
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};

export const getColours = () => {
  return async dispatch => {
    await dispatch(fetchRequest());

    try {
      const { data } = await axiosAuth().get("/colors");
      console.log("FETCH_COLOURS", data);
      await dispatch(fetchSuccess(data));
    } catch (error) {
      await dispatch(fetchError(error));
    }
  };
};

export const updateError = (error, data) => ({
  type: actionType.UPDATE_ERROR,
  payload: {
    error,
    data
  }
});

export const saveColor = (id, color, colorList) => {
  return async dispatch => {
    await dispatch(fetchRequest());

    // 1. Make copy of Colours array
    const colorCopy = [...colorList];

    // 2. Update State optimistically
    // a. create mutable copy of colorList
    const updatedColors = [...colorList];

    // b. find the index of updated color
    const colorIndex = updatedColors.findIndex(
      element => element.id === color.id
    );

    // c. replace the color being updated in colorList
    updatedColors.splice(colorIndex, 1, color);

    // d. updated state
    await dispatch(fetchSuccess(updatedColors));

    try {
      // 3. Update server
      await axiosAuth().put(`/colors/${id}`, color);
    } catch (error) {
      // 4. Revert back to old state
      await dispatch(updateError(error, colorCopy));
    }
  };
};

export const fetchAdd = data => ({
  type: actionType.FETCH_ADD,
  payload: data
});

export const addColor = (colorList, data) => {
  return async dispatch => {
    await dispatch(fetchRequest());

    // Optimistically add color
    // 1. Make copy of colorList
    const colorCopy = [...colorList];

    // 2. update state
    await dispatch(fetchAdd(data));

    // update server
    try {
      const { data: color } = await axiosAuth().post("/colors", data);
      console.log("FETCHADD", color);
    } catch (error) {
      await dispatch(updateError(error, colorCopy));
    }
  };
};

export const deleteRequest = (id, colorList) => {
  return async dispatch => {
    await dispatch(fetchRequest());

    // 1. Optimistically delete
    // a. make copy of color list

    const colorCopy = [...colorList];
    // b. filter slice of colorlist
    const updatedList = [...colorList].filter(color => color.id !== id);
    // c. update state
    await dispatch(fetchSuccess(updatedList));

    try {
      await axiosAuth().delete(`/colors/${id}`);
    } catch (error) {
      // 4. Revert back to old state
      await dispatch(updateError(error, colorCopy));
    }
  };
};
