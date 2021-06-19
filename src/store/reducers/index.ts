import { combineReducers } from "redux";
import { WindowStatesEnum } from "../../models/enums/window.states";
import { handleFolderReducer } from "./folder.reducers";
import { handleWindowStateReducer } from "./window.reducers";
export interface PreedaApplicationState {
  windowState: WindowStatesEnum[];
  selectedFolder: string;
}

export const reducers = combineReducers<PreedaApplicationState>({
  windowState: handleWindowStateReducer,
  selectedFolder: handleFolderReducer,
});
