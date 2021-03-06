import React from "react";
import { Route, Switch } from "react-router-dom";
import Burger from "./components/Burger"
import Home from "./components/Home";

import "./App.css";

function App() {
    return (
        <div className="App">
            
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/burger" component={Burger} exact />
                
            </Switch> 
        </div>
    );
}

export default App;
