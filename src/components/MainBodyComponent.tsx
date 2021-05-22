import { Button, Grid } from "@material-ui/core";
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
                    <Grid container direction="row" justify="center" spacing={3}>
                        <Grid item>
                            <Button component={Link} to='/food' variant="contained" color="primary">
                                Food Menu
                    </Button>
                        </Grid>
                        <Grid item>
                            <Button component={Link} to='/drinks' variant="contained" color="secondary">
                                Drinks Menu
                    </Button>
                        </Grid>
                    </Grid>
                </div>
            </div >
        );
    }
}