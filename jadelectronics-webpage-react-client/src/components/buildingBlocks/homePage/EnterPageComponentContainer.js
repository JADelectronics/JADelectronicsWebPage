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
                    imageUrl={"http://ec2-34-229-196-51.compute-1.amazonaws.com:3001/images/getBrainThumbnail"}
                    link={"/Brain"}
                />
                <EnterPageComponent
                    titleText={"Enter Body"}
                    description={"Body Learnings"}
                    imageName={"BodyImage"}
                    imageUrl={"http://ec2-34-229-196-51.compute-1.amazonaws.com:3001/images/getBodyThumbnail"}
                    link={"/Body"}
                />
            </div>
        );
    }
}
export default EnterPageComponentContainer;