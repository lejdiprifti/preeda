import React, { DragEventHandler, RefObject } from "react";
import '../styles/FolderComponent.css';

export class FolderComponent extends React.Component {
    folderRef: React.RefObject<HTMLDivElement>;
    constructor(props = {}) {
        super(props);
        this.folderRef = React.createRef<HTMLDivElement>();
    }
    dragFolder(event: React.DragEvent<HTMLDivElement>) {
        console.log(event.clientX, event.clientY)
        this.folderRef.current?.style.transform = `translate(${event.clientX},${event.clientY})`;
    }
 
    render() {
        return (
            <React.Fragment>
                <div className="desktop-item" draggable={true} ref={this.folderRef} onDrag={(event: React.DragEvent<HTMLDivElement>) => {this.dragFolder(event)}}>
                    <div className="icon">
                        <img src='GenericFolder.png' alt='Folder' />
                    </div>
                    <div className="title">
                        <span>Folder Name</span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}