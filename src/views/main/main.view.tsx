import React from "react";
import { connect } from "react-redux";
import { FinderComponent } from "../../components/finder/FinderComponent";
import { FolderComponent } from "../../components/folder/FolderComponent";
import { FOLDERS } from "../../constants/data";
import { WindowStatesEnum } from "../../models/enums/window.states";
import { PreedaApplicationState } from "../../store/reducers";
import { setWindowState } from "../../store/actions";
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
                <div className="imageContainer">
                    <img className="addressImg" src='address.png' alt="address" />
                </div>
                <div className="folderContainer">
                    <FolderComponent defaultPosition={{ x: 20, y: -23 }} folderName='Drinks' onClick={() => { console.log('clicked drinks') }}>
                        <img className="folderImage" draggable="false" src='GenericFolder.png' alt='Folder' />
                    </FolderComponent>
                    <FolderComponent defaultPosition={{ x: -97, y: -80 }} folderName='Food' onClick={() => { this.props.setWindowState(WindowStatesEnum.OPENED) }}>
                        <img className="folderImage" draggable="false" src='GenericFolder.png' alt='Folder' />
                    </FolderComponent>
                    <FolderComponent defaultPosition={{ x: -50, y: 56 }} folderName='Tables' onClick={() => { this.props.setWindowState(WindowStatesEnum.OPENED) }}>
                        <img className="folderImage" draggable="false" src='GenericFolder.png' alt='Folder' />
                    </FolderComponent>
                    <FolderComponent defaultPosition={{ x: 100, y: -70 }} folderName='Trash' onClick={() => { document.getElementById('root')!.innerHTML = '' }}>
                        <img className="folderImage" draggable="false" src='TrashIcon.png' alt='Trash' />
                    </FolderComponent>
                    <FolderComponent defaultPosition={{ x: -140, y: 10 }} folderName='Finder' onClick={() => { }}>
                        <img className="folderImage" draggable="false" src='FinderIcon.png' alt='Finder' />
                    </FolderComponent>
                </div>
                { this.props.windowState === WindowStatesEnum.OPENED && <FinderComponent data={FOLDERS} />}
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