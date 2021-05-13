import React from "react";
import Draggable from "react-draggable";
import { Position } from "../../models/Position";
import './FolderComponent.css';

interface FolderComponentProps {
    folderName: string,
    defaultPosition: Position,
    onClick: () => void
}

const DESKTOP_ITEM_CLASSNAME = 'desktop-item';

export class FolderComponent extends React.Component<FolderComponentProps, {}> {
    draggableRef: React.RefObject<HTMLDivElement>;
    constructor(props: FolderComponentProps) {
        super(props);
        this.draggableRef = React.createRef();
    }

    handleDragStart() {
        const desktopItems = Array.from(document.getElementsByClassName(DESKTOP_ITEM_CLASSNAME) as HTMLCollectionOf<HTMLDivElement>);
        desktopItems.forEach(item => {
            item.style.zIndex = '0';
        })
        this.draggableRef.current!.style.zIndex = '1';
    }

    render() {
        return (
            <Draggable defaultPosition={this.props.defaultPosition} onStart={() => this.handleDragStart()} defaultClassNameDragging='draggingFolder'>
                <div ref={this.draggableRef} className={DESKTOP_ITEM_CLASSNAME} onDoubleClick={() => { this.props.onClick() }}>
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