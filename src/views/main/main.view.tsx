import React from "react";
import { connect } from "react-redux";
import FinderComponent from "../../components/finder/FinderComponent";
import FolderComponent from "../../components/folder/FolderComponent";
import { FOLDERS } from "../../constants/data";
import { WindowStatesEnum } from "../../models/enums/window.states";
import { PreedaApplicationState } from "../../store/reducers";
import { setWindowState } from "../../store/actions";
import './main.view.css';
import TitleBarComponent from "../../components/tile-bar/TitleBarComponent";

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
                <div>
                    <img className="addressImg" src='address.png' alt="address" />
                </div>
                <div className="folderContainer">
                    {FOLDERS.map(currentFolder => {
                        return <FolderComponent defaultPosition={currentFolder.position} folderName={currentFolder.name}>
                            <img className="folderImage" draggable="false" src={currentFolder.iconSrc} alt={currentFolder.name} />
                        </FolderComponent>
                    })}
                    <FolderComponent defaultPosition={{ x: 100, y: -70 }} folderName='Trash'>
                        <img className="folderImage" draggable="false" src='TrashIcon.png' alt='Trash' />
                    </FolderComponent>
                    <FolderComponent defaultPosition={{ x: -140, y: 10 }} folderName='Finder'>
                        <img className="folderImage" draggable="false" src='FinderIcon.png' alt='Finder' />
                    </FolderComponent>
                </div>
                { this.props.windowState === WindowStatesEnum.OPENED && <FinderComponent data={FOLDERS} />}
                {this.props.windowState === WindowStatesEnum.SIZED && <TitleBarComponent title='Archive' />}
            </div>
        )
    }

}
const mapStateToProps = (state: PreedaApplicationState) => {
    return {
        windowState: state.windowState
    }
}

export default connect(mapStateToProps, { setWindowState })(MainView);