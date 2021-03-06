import uuid from "uuid/v1";
import { ADD_TABACCO } from "../constants/action-types";
import { DELETE_TABACCO } from "../constants/action-types";
import { EDIT_TABACCO } from "../constants/action-types";
import { LOGIN } from "../constants/action-types";
import { LOGOUT } from "../constants/action-types";

const tobaccoFromLS = JSON.parse(localStorage.getItem('tabak')) || []

const initialState = {
  tobacco: [
    ...tobaccoFromLS,

    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },
    { nameTabacco: "qwe", tasteTabacco: "qwe", description: "qwe" },

    
  ]
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
      localStorage.setItem('tabak', JSON.stringify(newTobacco))
      return {
        ...state,
        tobacco: newTobacco
      }
    }
    case EDIT_TABACCO: {
      const newTobacco = action.payload;
      const newTobaccoList = state.tobacco.filter(item => item.id !== newTobacco.id)
      newTobaccoList.push(newTobacco)

      localStorage.setItem('tabak', JSON.stringify(newTobaccoList))
      return {
        ...state,
        tobacco: newTobaccoList
      }
    }
    case LOGIN: {
      const userAcc = {
        ...action.payload,
      }
      const role = isAdmin(userAcc) ? 'admin' : 'user';
      localStorage.setItem('role', JSON.stringify(role));

      return {
        ...state
      }
    }
    case LOGOUT: {
      localStorage.removeItem('role')
      return {
        ...state
      }
    }
    default: return state

  }
}

function isAdmin(currentUser) {
  if (currentUser.username === 'test' &&
    currentUser.password === 'test') {
    return true
  }
  return false
}

export default rootReducer;