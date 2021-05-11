import React from "react";
import '../styles/MainBodyComponent.css';
import { FinderWindowComponent } from "./FinderWindowComponent";
import { FolderComponent } from "./FolderComponent";
export const MainBodyComponent:React.FC = (): JSX.Element => {
    return (
        <React.Fragment>
            <div id="mainBodyContainer">
                <img src='address.png' alt="address"/>
            </div>
            <FinderWindowComponent/>
            <FolderComponent/>
        </React.Fragment>
    )
}