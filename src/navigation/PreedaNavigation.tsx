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
                <Route exact path="/food"><PdfComponent src='assets/pdf/food_20210603.pdf' pageCount={10} /></Route>
                <Route exact path="/drinks"><PdfComponent src='assets/pdf/drinks_20210604.pdf' pageCount={8} /></Route>
                <Route exact path="/lunch"><PdfComponent src='assets/pdf/lunch_20210603.pdf' pageCount={1} /></Route>
                <Route exact path="/cocktails"><PdfComponent src='assets/pdf/cocktails_20200603.pdf' pageCount={8} /></Route>
                <FooterComponent />
            </HashRouter>
        )
    }
}