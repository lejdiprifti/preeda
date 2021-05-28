import React, { PropsWithChildren } from "react";
import Draggable from "react-draggable";
import { connect } from "react-redux";
import { setWindowState } from "../../store/actions";
import TitleBarComponent from "../tile-bar/TitleBarComponent";
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
            <Draggable cancel=".window-body" defaultClassNameDragging="draggingWindow">
                <div className="program-window">
                    <div className="window">
                        <TitleBarComponent title={this.props.windowTitle} />
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