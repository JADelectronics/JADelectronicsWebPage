//external imports
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

//internal imports
import './assets/css/default.min.css'
import Header from './components/headerComponents/header'
import HomePage from './components/pages/HomePage'
import Brain from './components/pages/BrainPage'
import Body from './components/pages/BodyPage'

class App extends Component {
    render() {
        return (
            <Router>
              <div className="App">
                <Header/>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/Brain" component={Brain}/>
                <Route exact path="/Body" component={Body}/>
              </div>
            </Router>
        );
    }
}

export default App;
