import React from "react";
import './MainBodyComponent.css';
import { FolderComponent } from "../folder/FolderComponent";
export const MainBodyComponent: React.FC = (): JSX.Element => {
    return (
        <div id="mainBodyContainer">
            <div className="imageContainer">
                <img className="addressImg" src='address.png' alt="address" />
            </div>
            <div className="folderContainer">
                <FolderComponent folderName='Drinks' />
                <FolderComponent folderName='Food' />
                <FolderComponent folderName='Tables' />
            </div>
        </div>
    )
}