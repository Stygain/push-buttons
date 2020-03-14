import { combineReducers } from 'redux';

import {
  RANDOMIZE_MENU_COLOR,
} from './actions.js';


const colors = [
  "rgb(149, 189, 178)",
  "rgb(149, 159, 189)",
  "rgb(211, 242, 179)",
  "rgb(189, 149, 174)",
  "rgb(219, 161, 91)"
]

function randomizeMenuColorReducer(state = "rgb(149, 189, 178)", action) {
  switch (action.type) {
    case RANDOMIZE_MENU_COLOR:
      var newColor = state;
      while (newColor === state) {
        newColor = colors[Math.round(Math.random() * (colors.length - 1))]
      }
      console.log("new color: " + newColor);
      return newColor;

    default:
      return state;
  }
}


const rootReducer = combineReducers({
  currMenuColor: randomizeMenuColorReducer,
});

export default rootReducer;
