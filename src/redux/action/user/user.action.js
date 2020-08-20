import * as actionTypes from "../actionConstants";

export const setCurrentUser = (user) => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user,
});
