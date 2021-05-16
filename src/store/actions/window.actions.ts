import { WindowStatesEnum } from "../../models/enums/window.states";
import { WindowActionsEnum } from "./types";

export interface SetWindowStateAction {
  type: WindowActionsEnum.SET_STATE;
  payload: WindowStatesEnum;
}
export type WindowGenericAction = SetWindowStateAction;

export const setWindowState = (
  windowState: WindowStatesEnum
): SetWindowStateAction => {
  return {
    type: WindowActionsEnum.SET_STATE,
    payload: windowState,
  };
};
