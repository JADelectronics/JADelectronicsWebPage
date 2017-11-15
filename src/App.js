//external imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//internal imports
import './Assets/css/default.min.css'
import Header from './components/headerComponents/header'
import HomePage from './components/pages/homePage'
import Products from './components/pages/products'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/Products" component={Products}/>
        </div>
      </Router>
    );
  }
}

export default App;
