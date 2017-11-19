//external imports
import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>
            <div className="logo"> 
                LOGO GOES HERE
            </div>

            <nav>
                <ul>
                    <li className="first">
                        <Link to="/"> Home</Link>
                    </li>
                    <li>
                        <Link to="/Brain"> BrainPage</Link>
                    </li>
                    <li className="last">
                        <Link to="/Body"> BodyPage</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }
}

export default Header;
