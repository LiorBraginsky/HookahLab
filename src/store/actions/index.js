import { ADD_TABACCO } from "../constants/action-types";
import { DELETE_TABACCO } from "../constants/action-types";
import { EDIT_TABACCO } from "../constants/action-types";
import { LOGIN } from "../constants/action-types";
import { LOGOUT } from "../constants/action-types";

export function addTobacco(payload) {
  return {
    type: ADD_TABACCO,
    payload
  };
}

export function deleteTobacco(payload) {
  return {
    type: DELETE_TABACCO,
    payload
  };
}

export function editTobacco(payload) {
  return {
    type: EDIT_TABACCO,
    payload
  };
}

export function login(payload) {
  return {
    type: LOGIN,
    payload
  };
}

export function logout(payload) {
  return {
    type: LOGOUT,
    payload
  };
}