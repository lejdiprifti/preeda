import React from "react";
import { FOLDERS } from "../../constants/data";
import { Folder } from "../../models/Folder";
import { Image } from "../../models/Image";
import { WindowComponent } from "../window/WindowComponent";
import './FinderComponent.css';

interface FinderComponentProps {
    data: Folder[]
}
interface FinderComponentState {
    selectedFolder: Folder,
    selectedImage: Image
}
export class FinderComponent extends React.Component<FinderComponentProps, FinderComponentState> {

    constructor(props: FinderComponentProps) {
        super(props);
        this.state = {
            selectedFolder: FOLDERS[0],
            selectedImage: FOLDERS[0].images[0]
        }
    }

    handleImageSelected(currentImage: Image) {
        if (this.state.selectedImage && currentImage.src === this.state.selectedImage.src) {
            this.setState({ ...this.state, selectedImage: undefined! })
        } else {
            this.setState({ ...this.state, selectedImage: currentImage })
        }
    }

    render() {
        return (
            <WindowComponent windowTitle='Archive'>
                <div className="finder-program">
                    <div className="finder-toolbar">
                        <div className="flex">
                            <div className="toolbar-button mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24" className="small" data-v-ec73b998="" data-v-09e53189=""><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" data-v-ec73b998=""></path>
                                </svg>
                            </div>
                            <div className="toolbar-button mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24" className="small" data-v-ca06ae6c="" data-v-09e53189=""><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" data-v-ca06ae6c=""></path>
                                </svg>
                            </div>
                            <div className="toolbar-text">
                                {this.state.selectedFolder.name}
                            </div>
                        </div>
                    </div>
                    <div className="finder-panes">
                        <div className="finder-plane">
                            <div className="sidebar">
                                {this.props.data.map(currentElement => {
                                    return (
                                        <div
                                            className={"sidebar-item " + (this.state.selectedFolder.name === currentElement.name ? 'is-active' : '')}
                                            onTouchStart={() => { this.setState({ selectedFolder: currentElement }) }}
                                            onClick={() => { this.setState({ selectedFolder: currentElement }) }}>
                                            <div className="title">{currentElement.name}</div>
                                            <div className="label">{currentElement.images.length}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="main-panes">
                            <div className="finder-pane finder-pane--file-list">
                                <div id="file-list" className="file-list">
                                    {this.state.selectedFolder.images.map(currentImage => {
                                        return (
                                            <div className={"file-list-item " + (this.state.selectedImage?.src === currentImage.src ? 'is-active' : '')} >
                                                <div className="row" onTouchStart={() => { this.handleImageSelected(currentImage) }} onClick={() => { this.handleImageSelected(currentImage) }}>
                                                    <img src="GenericImageIcon.png" className="icon" />
                                                    <div className="name"><span className="base">{currentImage.title}</span> <span className="extension">.jpg</span></div>
                                                    <svg width="9" height="11" xmlns="http://www.w3.org/2000/svg" className="">
                                                        <path fill="#FFF" d="M0 10.5V.5l9 5z" fillRule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <div className="file-preview" style={this.state.selectedImage && this.state.selectedImage.src === currentImage.src ? {} : { display: "none" }}>
                                                    <div title="Double click to open in a new window" className="file-viz">
                                                        <img src={this.state.selectedImage?.src} className="file-image" />
                                                    </div>
                                                    <div className="file-info">
                                                        <div className="file-name">{this.state.selectedImage?.title}</div>
                                                        <div className="file-subtitle">JPG image - 4.6 MB</div>
                                                    </div>
                                                    <div className="file-details">
                                                        <div className="file-detail">
                                                            <div className="detail-key">Price</div>
                                                            <div className="detail-value">{this.state.selectedImage?.price}</div>
                                                        </div>
                                                        <div className="file-detail">
                                                            <div className="detail-key">Price</div>
                                                            <div className="detail-value">{this.state.selectedImage?.price}</div>
                                                        </div>
                                                        <div className="file-detail">
                                                            <div className="detail-key">Price</div>
                                                            <div className="detail-value">{this.state.selectedImage?.price}</div>
                                                        </div>
                                                        <div className="file-detail">
                                                            <div className="detail-key">Price</div>
                                                            <div className="detail-value">{this.state.selectedImage?.price}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </WindowComponent>
        )
    }
}