import React from "react";
import Global from "./styles/GlobalStyle";

import Login from "./Pages/LoginPage";
import Api from "./Pages/ApiPage";
import Sobre from "./Pages/SobrePage";

import NavBar from "./Components/Global/NavBar/NavBar";
import Footer from "./Components/Global/Footer/Footer";

import { BrowserRouter, Switch, Route } from "react-router-dom";
export default function App() {
    return (
        <>
            <Global />
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/sobre" component={Sobre} />
                    <Route path="/api" component={Api} />
                    <Route path="/" component={Login} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    );
}
