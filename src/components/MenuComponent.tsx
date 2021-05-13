import React from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import '../styles/MenuComponent.css';
export class MenuComponent extends React.Component {


    getScale(): number {
        if (window.innerWidth > 960) {
            return 1.2
        } else if (window.innerWidth > 400) {
            return 0.9
        } else {
            return 0.7
        }
    }

    render() {
        return (
            <div className="documentContainer">
                <Document
                    file="menu_web.pdf"
                >
                    <Page scale={this.getScale()} className='pageContainer' pageNumber={1} />
                    <br />
                    <Page scale={this.getScale()} className='pageContainer' pageNumber={2} />
                    <br />
                    <Page scale={this.getScale()} className='pageContainer' pageNumber={3} />
                    <br />
                </Document>
            </div>
        )
    }
}