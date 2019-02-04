import { ADD_TABACCO } from "../constants/action-types";

export function addTobacco(payload) {
  return {
    type: ADD_TABACCO,
    payload
  };
}
