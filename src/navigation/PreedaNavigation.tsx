import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { FooterComponent } from "../components/footer/FooterComponent";
import { HeaderComponent } from "../components/header/HeaderComponent";
import MainView from "../views/main/main.view";
import { PdfComponent } from "../components/pdf/PdfComponent";

export class PreedaNavigation extends React.Component {
    render() {
        return (
            <HashRouter>
                <HeaderComponent />
                <Route exact path="/" ><MainView /></Route>
                <Route exact path="/food"><PdfComponent src='food_20210520.pdf' pageCount={10} /></Route>
                <Route exact path="/drinks"><PdfComponent src='drinks_20210520.pdf' pageCount={8} /></Route>
                <FooterComponent />
            </HashRouter>
        )
    }
}