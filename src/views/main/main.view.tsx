import { Button, Grid } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FinderComponent from "../../components/finder/FinderComponent";
import FolderComponent from "../../components/folder/FolderComponent";
import TitleBarComponent from "../../components/tile-bar/TitleBarComponent";
import { FOLDERS } from "../../constants/data";
import { WindowStatesEnum } from "../../models/enums/window.states";
import { setWindowState } from "../../store/actions";
import { PreedaApplicationState } from "../../store/reducers";
import './main.view.css';

interface MainViewProps {
    windowState: WindowStatesEnum,
    setWindowState: typeof setWindowState
}
class MainView extends React.Component<MainViewProps> {
    constructor(props: MainViewProps) {
        super(props);
    }

    render() {
        return (
            <div id="mainBodyContainer">
                <Grid container direction="row" alignItems="flex-start">
                    {this.props.windowState === WindowStatesEnum.OPENED &&
                        <Grid item><FinderComponent data={FOLDERS} /> </Grid>}
                    {this.props.windowState === WindowStatesEnum.SIZED && <Grid item><TitleBarComponent title='Archive' /></Grid>}
                    <Grid item>
                        <img className="addressImg" src='address.png' alt="address" />
                    </Grid>
                    <Grid item className="buttonFolderContainer">
                        <Grid container direction="row" justify="center" spacing={3} alignItems="stretch">
                            <Grid item>
                                <Button component={Link} to='/food' variant="contained" color="primary">
                                    Food Menu
                            </Button>
                            </Grid>
                            <Grid item>
                                <Button component={Link} to='/drinks' variant="contained" color="primary">
                                    Drinks Menu
                            </Button>
                                <Grid item>
                                    <Button component={Link} to='/cocktails' variant="contained" color="primary">
                                        Cocktails Menu
                            </Button>
                                    <Grid item>
                                        <Button component={Link} to='/lunch' variant="contained" color="primary">
                                            Lunch Menu
                            </Button>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="row" spacing={4}>
                                        {FOLDERS.map(currentFolder => {
                                            return <Grid item>
                                                <FolderComponent folderName={currentFolder.name}>
                                                    <img className="folderImage" draggable="false" src={currentFolder.iconSrc} alt={currentFolder.name} />
                                                </FolderComponent>
                                            </Grid>
                                        })}
                                        <Grid item>
                                            <FolderComponent folderName='Trash'>
                                                <img className="folderImage" draggable="false" src='TrashIcon.png' alt='Trash' />
                                            </FolderComponent>
                                        </Grid>
                                        <Grid item>
                                            <FolderComponent folderName='Finder'>
                                                <img className="folderImage" draggable="false" src='FinderIcon.png' alt='Finder' />
                                            </FolderComponent>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
            </div>
        )
    }
}
const mapStateToProps = (state: PreedaApplicationState) => {
    return {
                        windowState: state.windowState
    }
}

export default connect(mapStateToProps, {setWindowState})(MainView);