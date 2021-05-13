import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { MainBodyComponent } from "../components/MainBodyComponent";
import { MenuComponent } from "../components/MenuComponent";

export class PreedaNavigation extends React.Component {
    render() {
        return (
            <HashRouter>
                <HeaderComponent />
                <Route exact path="/" ><MainBodyComponent /></Route>
                <Route exact path="/menu"><MenuComponent /></Route>
                <FooterComponent />
            </HashRouter>
        )
    }
}