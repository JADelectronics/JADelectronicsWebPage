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
        <div className="container-fluid">
            <Header/>
            <HomePageDescriptionComponent
                description={"Text will go here"}
            />
            <EnterPageComponentContainer
                Component1={"test"}
                Component2={"test"}
            />
            <Footer/>
        </div>
    );
  }

}
export default HomePage;