import React from "react";
import Draggable from "react-draggable";
import './WindowComponent.css';
interface WindowComponentProps {
    windowTitle: string
}
export class WindowComponent extends React.Component<WindowComponentProps> {

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
                                <button title="Close window" className="title-bar-control red"></button>
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