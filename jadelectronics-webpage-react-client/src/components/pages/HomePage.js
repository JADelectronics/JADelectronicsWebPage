//external imports
import React from 'react';

//internal components
import Header from '../headerComponents/header'
import Footer from '../footerComponents/footer'
import HomePageDescriptionComponent from "../buildingBlocks/homePage/HomePageDescriptionComponent";
import EnterPageComponentContainer from "../buildingBlocks/homePage/EnterPageComponentContainer";

class HomePage extends React.Component {

    constructor(){
        super();
        this.state = {

        };

    }

  render() {
      return (
          <div>
              <Header/>
              <HomePageDescriptionComponent/>
              <EnterPageComponentContainer/>
              <Footer/>
          </div>
    );
  }
}
export default HomePage;