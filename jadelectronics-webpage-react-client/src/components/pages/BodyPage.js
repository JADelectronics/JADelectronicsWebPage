//external imports
import React, { Component } from 'react';

//internal imports
import Header from "../headerComponents/header";
import Footer from "../footerComponents/footer";

class BodyPage extends Component {
  render() {
    return (
        <div>
            <Header/>
            <div className="under-construction">
                Body page is currently under construction
            </div>
            <Footer/>
        </div>
    );
  }
}

export default BodyPage;
