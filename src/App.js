import React from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import Home from "./routes/Home"
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
            <Route path="/todolist">
              <ToDoList />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
