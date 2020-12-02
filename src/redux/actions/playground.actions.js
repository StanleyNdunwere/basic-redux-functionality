import { CHANGE_TITLE } from "../action.types";

export const changeTitleState = (title) => {
  return {
    type: CHANGE_TITLE,
    payload: title,
  }
}
