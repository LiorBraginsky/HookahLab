import { ADD_TABACCO } from "../constants/action-types";
import { DELETE_TABACCO } from "../constants/action-types";
import { EDIT_TABACCO } from "../constants/action-types";

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