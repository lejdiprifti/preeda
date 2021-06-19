import React from 'react';
import WindowComponent from "../window/WindowComponent";
export class SlideshowComponent extends React.Component {
    render() {
        return (<WindowComponent windowTitle="Preeda">
            <video width="100%" height="100%" controls>
                <source src="assets/videos/Slideshow-1.mp4" type="video/mp4" />
                <source src="assets/videos/Slideshow-1.m4v" type="video/m4v" />
                Your browser does not support the video tag.
            </video>
        </WindowComponent>);
    }
}