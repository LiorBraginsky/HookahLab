import uuid from "uuid/v1";
import { ADD_TABACCO } from "../constants/action-types";
import { DELETE_TABACCO } from "../constants/action-types";
import { EDIT_TABACCO } from "../constants/action-types";


const initialState = {
  tobacco: [{
    nameTabacco: 'name tobacco',
    tasteTabacco: 'taste',
    id: '1',
  }]
};

function rootReducer(state = initialState, action) {

  switch (action.type) {
    case ADD_TABACCO: {
      const newTobaccoList = [...state.tobacco];
      const tobacco = {
        ...action.payload,
        createAt: Date.now(),
        id: uuid()
      };
      newTobaccoList.push(tobacco)
      localStorage.setItem('tabak', JSON.stringify(newTobaccoList))
      return {
        ...state,
        tobacco: newTobaccoList
      };
    }

    case DELETE_TABACCO: {
      const newTobacco = state.tobacco.filter(item => item.id !== action.payload)

      return {
        ...state,
        tobacco: newTobacco
      }
    }
    case EDIT_TABACCO: {
      const newTobacco = action.payload;
      //1. find old tobacco
      const newTobaccoList = state.tobacco.filter(item => item.id !== newTobacco.id)
      newTobaccoList.push(newTobacco)

      state.tobacco = [...newTobaccoList];
      localStorage.setItem('tobaccoItems', JSON.stringify(newTobaccoList))

    }
      return state
  }
  return state;
}

export default rootReducer;