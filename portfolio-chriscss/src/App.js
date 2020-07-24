import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/" component={Home} exact />
                
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
