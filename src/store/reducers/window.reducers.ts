import { PreedaApplicationState } from ".";
import { WindowStatesEnum } from "../../models/enums/window.states";
import { WindowActionsEnum, WindowGenericAction } from "../actions";

export const handleWindowStateReducer = (
  state: WindowStatesEnum[] = [WindowStatesEnum.VIDEO_OPENED],
  action: WindowGenericAction
) => {
  switch (action.type) {
    case WindowActionsEnum.SET_STATE:
      return state.concat(action.payload);
    case WindowActionsEnum.REMOVE_STATE:
      return state.filter((state) => state !== action.payload);
    default:
      return state;
  }
};
