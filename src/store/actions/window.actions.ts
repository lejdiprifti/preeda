import { WindowStatesEnum } from "../../models/enums/window.states";
import { WindowActionsEnum } from "./types";

export interface SetWindowStateAction {
  type: WindowActionsEnum.SET_STATE;
  payload: WindowStatesEnum;
}

export interface RemoveWindowStateAction {
  type: WindowActionsEnum.REMOVE_STATE;
  payload: WindowStatesEnum;
}

export type WindowGenericAction = SetWindowStateAction | RemoveWindowStateAction;

export const setWindowState = (
  windowState: WindowStatesEnum
): SetWindowStateAction => {
  return {
    type: WindowActionsEnum.SET_STATE,
    payload: windowState,
  };
};

export const removeWindowState = (
  windowState: WindowStatesEnum
): RemoveWindowStateAction => {
  return {
    type: WindowActionsEnum.REMOVE_STATE,
    payload: windowState
  }
} 
