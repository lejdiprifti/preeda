import { PreedaApplicationState } from ".";
import { WindowStatesEnum } from "../../models/enums/window.states";
import { WindowActionsEnum, WindowGenericAction } from "../actions";

export const handleWindowStateReducer = (
  state: WindowStatesEnum = WindowStatesEnum.CLOSED,
  action: WindowGenericAction
) => {
  switch (action.type) {
    case WindowActionsEnum.SET_STATE:
      return action.payload;
    default:
      return state;
  }
};
