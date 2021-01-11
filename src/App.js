import React from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import Home from "./routes/Home"
import Registry from "./routes/Registry"
import ToDoList from "./routes/ToDoList"
import './App.css';

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path = "/" exact>
              <Home />
            </Route>
            <Route path="/Registry">
              <Registry />
            </Route>
            <Route path="/ToDoList">
              <ToDoList />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
