import React, { PropsWithChildren } from "react";
import Draggable from "react-draggable";
import { connect } from "react-redux";
import { WindowStatesEnum } from "../../models/enums/window.states";
import { Position } from "../../models/Position";
import { setWindowState } from "../../store/actions";
import { selectFolder } from "../../store/actions/folder.actions";
import './FolderComponent.css';

interface FolderComponentProps {
    folderName: string,
    selectFolder: typeof selectFolder,
    setWindowState: typeof setWindowState
}

const DESKTOP_ITEM_CLASSNAME = 'desktop-item';

type FolderComponentPropsWithChildren = PropsWithChildren<FolderComponentProps>;
class FolderComponent extends React.Component<FolderComponentPropsWithChildren, {}> {
    draggableRef: React.RefObject<HTMLDivElement>;
    clickCount: number;
    constructor(props: FolderComponentPropsWithChildren) {
        super(props);
        this.draggableRef = React.createRef();
        this.clickCount = 0;
    }

    handleDragStart() {
        const desktopItems = Array.from(document.getElementsByClassName(DESKTOP_ITEM_CLASSNAME) as HTMLCollectionOf<HTMLDivElement>);
        desktopItems.forEach(item => {
            item.style.zIndex = '0';
        })
        this.draggableRef.current!.style.zIndex = '1';
    }

    openWindow() {
        this.props.selectFolder(this.props.folderName);
        this.props.setWindowState(WindowStatesEnum.OPENED)
    }

    handleClicks() {
        this.clickCount++;
        let singleClickTimer: NodeJS.Timeout;
        const _ = this;
        if (this.clickCount === 1) {
            singleClickTimer = setTimeout(function () {
                _.clickCount = 0;
            }, 300);
        } else if (this.clickCount === 2) {
            clearTimeout(singleClickTimer!);
            this.clickCount = 0;
            this.openWindow();
        }
    }

    render() {
        return (
            <Draggable onStart={() => this.handleDragStart()} defaultClassNameDragging='draggingFolder'>
                <div ref={this.draggableRef} className={DESKTOP_ITEM_CLASSNAME} onTouchStart={() => { this.handleClicks() }} onDoubleClick={() => { this.openWindow() }}>
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

export default connect(null, { setWindowState, selectFolder })(FolderComponent);