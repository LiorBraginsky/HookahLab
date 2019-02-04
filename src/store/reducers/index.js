import uuid from "uuid/v1";
import { ADD_TABACCO } from "../constants/action-types";

const initialState = {
  tobacco: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_TABACCO) {
    const tobacco = {
      ...action.payload,
      createAt: Date.now(),
      id: uuid()
    };

    state.tobacco.push(tobacco);
  }
  return state;
}

export default rootReducer;
