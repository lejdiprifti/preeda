import React from "react";
import '../styles/MainBodyComponent.css';
import { FinderWindowComponent } from "./FinderWindowComponent";

export const MainBodyComponent:React.FC = (): JSX.Element => {
    return (
        <React.Fragment>
            <div id="mainBodyContainer">
                <img src='address.png'/>
            </div>
            <FinderWindowComponent/>
        </React.Fragment>
    )
}