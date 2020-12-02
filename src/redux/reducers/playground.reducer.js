import * as actions from "../action.types"


let initialState = {
  title: "Running Along Depths"
}

export function playgroundReducer(state = initialState, action) {

  switch (action.type) {
    case actions.CHANGE_TITLE:
      return {
        ...state,
        title: action.payload
      }
    default:
      return state;
  }
}

