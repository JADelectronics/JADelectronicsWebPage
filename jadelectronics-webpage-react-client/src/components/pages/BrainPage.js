//external imports
import React, { Component } from 'react';

//internal imports
import Header from "../headerComponents/header";
import Footer from "../footerComponents/footer";

class BrainPage extends Component {
  render() {
    return (
        <div>
            <Header/>
            <div className="under-construction">
                <br/><br/>Brain page is currently under construction<br/>
                <img src="http://jadelectronicarts.com:3001/images/getUnderConstruction" className={"img-center"}></img>
            </div>
            <Footer/>
        </div>
    );
  }
}

export default BrainPage;
