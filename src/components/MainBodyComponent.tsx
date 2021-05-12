import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import '../styles/MainBodyComponent.css';
export class MainBodyComponent extends React.Component {
    constructor(props = {}) {
        super(props);
    }
    render() {
        return (
            <div id="mainBodyContainer">
                <div className="addressContainer">
                    <img src='address.png' alt="address" />
                </div>
                <div className="buttonContainer">
                    <Button component={Link} to='/menu' variant="contained" color="primary">
                        Current Menu
                    </Button>
                </div>
            </div >
        );
    }
}