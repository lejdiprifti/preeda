import React, { CSSProperties, DragEventHandler, RefObject } from "react";
import Draggable from "react-draggable";
import './FolderComponent.css';

interface FolderComponentProps {
    folderName: string
}

interface FolderComponentState {

}

export class FolderComponent extends React.Component<FolderComponentProps, FolderComponentState> {

    constructor(props: FolderComponentProps) {
        super(props);
    }

    render() {
        return (
            <Draggable>
                <div className="desktop-item">
                    <div className="icon">
                        <img id="folderImage" draggable="false" src='GenericFolder.png' alt='Folder' />
                    </div>
                    <div className="title">
                        <span>{this.props.folderName}</span>
                    </div>
                </div>
            </Draggable>
        )
    }
}