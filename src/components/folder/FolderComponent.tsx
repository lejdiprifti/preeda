import React, { ComponentProps, ComponentPropsWithRef, CSSProperties, DragEventHandler, RefObject } from "react";
import Draggable from "react-draggable";
import './FolderComponent.css';

interface FolderComponentProps {
    folderName: string,
    onClick: () => void
}

export class FolderComponent extends React.Component<FolderComponentProps, {}> {
    draggableRef: React.RefObject<HTMLDivElement>;
    constructor(props: FolderComponentProps) {
        super(props);
        this.draggableRef = React.createRef();
    }

    render() {
        return (
            <Draggable defaultPosition={{ x: Math.random() * 100, y: Math.random() * 100 }}>
                <div ref={this.draggableRef} onDragStart={() => this.draggableRef.current?.classList.replace('draggedFolder', 'draggingFolder')} onDragEnd={() => this.draggableRef.current?.classList.replace('draggingFolder', 'draggedFolder')} className="desktop-item" onDoubleClick={() => { this.props.onClick() }}>
                    <div className="icon">
                        {this.props.children}
                    </div>
                    <div className="title">
                        <span>{this.props.folderName}</span>
                    </div>
                </div>
            </Draggable>
        )
    }
}