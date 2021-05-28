import { FOLDERS } from "../../constants/data";
import { FolderActionsEnum } from "../actions";
import { FolderGenericAction } from "../actions/folder.actions";

const initialState: string = FOLDERS[0].name;
export const handleFolderReducer = (
  state: string = initialState,
  action: FolderGenericAction
) => {
  switch (action.type) {
    case FolderActionsEnum.SET_SELECTED_FOLDER:
      return action.payload;
    default:
      return state;
  }
};
