import React from "react";
import { connect } from "react-redux";
import { WindowStatesEnum } from "../../models/enums/window.states";
import { setWindowState, removeWindowState } from "../../store/actions";
import { PreedaApplicationState } from "../../store/reducers";
import './TitleBarComponent.css';
interface TitleBarComponentProps {
    title: string;
    windowState: WindowStatesEnum[];
    setWindowState: typeof setWindowState;
    removeWindowState: typeof removeWindowState;
}

class TitleBarComponent extends React.Component<TitleBarComponentProps> {

    constructor(props: TitleBarComponentProps) {
        super(props);
    }

    handleCloseButton() {
        switch (this.props.title) {
            case "Archive":
                 this.props.removeWindowState(WindowStatesEnum.FINDER_OPENED);
                 break;
            case "Preeda":
                 this.props.removeWindowState(WindowStatesEnum.VIDEO_OPENED);
                 break;
            default:
        }
    }

    handleMinimizeWindow() {
        switch (this.props.title) {
            case "Archive":
                this.props.setWindowState(WindowStatesEnum.FINDER_SIZED);
                this.props.removeWindowState(WindowStatesEnum.FINDER_OPENED);
                break;
            case "Preeda":
                this.props.setWindowState(WindowStatesEnum.VIDEO_SIZED);
                this.props.removeWindowState(WindowStatesEnum.VIDEO_OPENED);
                break;
            default:
        }
    }

    handleMaximizeWindow() {
        switch (this.props.title) {
            case "Archive":
                this.props.setWindowState(WindowStatesEnum.FINDER_OPENED);
                this.props.removeWindowState(WindowStatesEnum.FINDER_SIZED);
                break;
            case "Preeda":
                this.props.setWindowState(WindowStatesEnum.VIDEO_OPENED);
                this.props.removeWindowState(WindowStatesEnum.VIDEO_SIZED);
                break;
            default:
        }
    }
// ${this.props.windowState === WindowStatesEnum.VIDEO_SIZED || this.props.windowState === WindowStatesEnum.FINDER_SIZED ? 'sized' : ''}
    render() {
        return (
            <div className={`title-bar`}>
                <div className="title-bar-controls">
                    <button title="Close window" className="title-bar-control red" onTouchStart={() => { this.handleCloseButton() }} onClick={() => { this.handleCloseButton() }}></button>
                    <button title="Minimize window" className="title-bar-control yellow" onTouchStart={() => { this.handleMinimizeWindow()}} onClick={() => { this.handleMinimizeWindow() }}></button>
                    <button title="Maximize window" className="title-bar-control green" onTouchStart={() => { this.handleMaximizeWindow() }} onClick={() => { this.handleMaximizeWindow() }}></button>
                </div>
                <div className="title-bar-text">{this.props.title}</div>
            </div>
        )
    }
}

const mapStateToProps = (state: PreedaApplicationState) => {
    return {
        windowState: state.windowState
    }
}

export default connect(mapStateToProps, { setWindowState, removeWindowState })(TitleBarComponent);