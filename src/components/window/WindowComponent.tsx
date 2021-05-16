import React, { PropsWithChildren } from "react";
import Draggable from "react-draggable";
import { connect } from "react-redux";
import { WindowStatesEnum } from "../../models/enums/window.states";
import { setWindowState } from "../../store/actions";
import './WindowComponent.css';
export interface WindowComponentProps {
    windowTitle: string,
    setWindowState: typeof setWindowState
}

export type WindowComponentPropsWithChildren = PropsWithChildren<WindowComponentProps>;
class WindowComponent extends React.Component<WindowComponentPropsWithChildren> {

    constructor(props: WindowComponentProps) {
        super(props);
    }
    render() {
        return (
            <Draggable>
                <div className="program-window">
                    <div className="window">
                        <div className="title-bar">
                            <div className="title-bar-controls">
                                <button title="Close window" className="title-bar-control red" onTouchStart={() => { this.props.setWindowState(WindowStatesEnum.CLOSED) }} onClick={() => { this.props.setWindowState(WindowStatesEnum.CLOSED) }}></button>
                                <button title="Minimize window" className="title-bar-control yellow"></button>
                                <button title="Maximize window" className="title-bar-control green"></button>
                            </div>
                            <div className="title-bar-text">{this.props.windowTitle}</div>
                        </div>
                        <div className="window-body">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </Draggable>
        )
    }
}

export default connect(null, { setWindowState })(WindowComponent);