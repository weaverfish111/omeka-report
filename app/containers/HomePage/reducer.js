/*
 *
 * HomePage reducer
 *
 */
import * as consts from './constants'

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
function homePageReducer (state = initialState, action){
    switch (action.type) {
      case consts.DEFAULT_ACTION:
          break;
      default:
          return state
  }
}

export default homePageReducer;
