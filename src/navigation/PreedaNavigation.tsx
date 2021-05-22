import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { MainBodyComponent } from "../components/MainBodyComponent";
import { PdfComponent } from "../components/PdfComponent";

export class PreedaNavigation extends React.Component {
    render() {
        return (
            <HashRouter>
                <HeaderComponent />
                <Route exact path="/" ><MainBodyComponent /></Route>
                <Route exact path="/food"><PdfComponent src='food_20210520.pdf' pageCount={10} /></Route>
                <Route exact path="/drinks"><PdfComponent src='drinks_20210520.pdf' pageCount={8} /></Route>
                <FooterComponent />
            </HashRouter>
        )
    }
}