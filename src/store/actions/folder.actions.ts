import { FolderActionsEnum } from "./types";

interface SetFolderAction {
  type: FolderActionsEnum.SET_SELECTED_FOLDER;
  payload: string;
}

export const selectFolder = (selectedFolder: string): SetFolderAction => {
  return {
    type: FolderActionsEnum.SET_SELECTED_FOLDER,
    payload: selectedFolder,
  };
};

export type FolderGenericAction = SetFolderAction;
