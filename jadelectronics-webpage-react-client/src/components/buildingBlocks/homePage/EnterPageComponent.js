//external imports
import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


//internal components

class EnterPageComponent extends React.Component {

    static propTypes = {
        titleText: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageName: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    }

    constructor(props){
        super(props);
        this.state = {
            titleText: this.props.titleText,
            description: this.props.description,
            imageName: this.props.imageName,
            imageUrl: this.props.imageUrl,
            link: this.props.link
        }
    }

    render (){
        return (
            <div className={"enter-page-component"}>
                <div className={"enter-page-component-title"}>
                    <Link to={this.props.link}> {this.props.titleText}</Link>
                </div>
                <div className={"enter-page-component-image"}>
                    <img src={this.props.imageUrl} className={"img-center"}></img>
                </div>
                <div className={"enter-page-component-description"}>
                    {this.props.description}
                </div>
            </div>
        );
    }
}
export default EnterPageComponent;