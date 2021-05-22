import React from "react";
import { connect } from "react-redux";
import { WindowStatesEnum } from "../../models/enums/window.states";
import { setWindowState } from "../../store/actions";
import { PreedaApplicationState } from "../../store/reducers";
import './TitleBarComponent.css';
interface TitleBarComponentProps {
    title: string;
    windowState: WindowStatesEnum;
    setWindowState: typeof setWindowState
}

class TitleBarComponent extends React.Component<TitleBarComponentProps> {

    constructor(props: TitleBarComponentProps) {
        super(props);
    }

    render() {
        return (
            <div className={`title-bar ${this.props.windowState === WindowStatesEnum.SIZED ? 'sized' : ''}`}>
                <div className="title-bar-controls">
                    <button title="Close window" className="title-bar-control red" onTouchStart={() => { this.props.setWindowState(WindowStatesEnum.CLOSED) }} onClick={() => { this.props.setWindowState(WindowStatesEnum.CLOSED) }}></button>
                    <button title="Minimize window" className="title-bar-control yellow" onTouchStart={() => { this.props.setWindowState(WindowStatesEnum.SIZED) }} onClick={() => { this.props.setWindowState(WindowStatesEnum.SIZED) }}></button>
                    <button title="Maximize window" className="title-bar-control green" onTouchStart={() => { this.props.setWindowState(WindowStatesEnum.OPENED) }} onClick={() => { this.props.setWindowState(WindowStatesEnum.OPENED) }}></button>
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

export default connect(mapStateToProps, { setWindowState })(TitleBarComponent);