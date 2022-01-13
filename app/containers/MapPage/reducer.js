/*
 *
 * MapPage reducer
 *
 */
import * as consts from './constants'

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
function mapPageReducer (state = initialState, action){
    switch (action.type) {
      case consts.DEFAULT_ACTION:
          break;
      default:
          return state
  }
}

export default mapPageReducer;
