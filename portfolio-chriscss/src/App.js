import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/" component={Home} exact />
                
            </Switch>
        </div>
    );
}

export default App;
