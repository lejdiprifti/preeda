import { WindowStatesEnum } from "../../models/enums/window.states";
import { combineReducers } from "redux";
import { handleWindowStateReducer } from "./window.reducers";
export interface PreedaApplicationState {
  windowState: WindowStatesEnum;
}

export const reducers = combineReducers<PreedaApplicationState>({
  windowState: handleWindowStateReducer,
});
