//external imports
import React from 'react'
import EnterPageComponent from "./EnterPageComponent";

//internal components

class EnterPageComponentContainer extends React.Component {

    constructor(){
        super();
        this.state = {

        };

    }

    render (){
        return (
            <div className={"enter-page-container"}>
                <EnterPageComponent
                    titleText={"Enter Brain"}
                    description={"Brain Learnings"}
                    imageName={"BrainImage"}
                    imageUrl={"localHost//BrainImage"}
                    link={"/Brain"}
                />
                <EnterPageComponent
                    titleText={"Enter Body"}
                    description={"Body Learnings"}
                    imageName={"BodyImage"}
                    imageUrl={"localHost//BodyImage"}
                    link={"/Body"}
                />
            </div>
        );
    }
}
export default EnterPageComponentContainer;