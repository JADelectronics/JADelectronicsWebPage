//external imports
import React from 'react'
import PropTypes from 'prop-types';

//internal components

class HomePageDescriptionComponent extends React.Component {

    static propTypes = {
        description: PropTypes.string.isRequired
    }

    constructor(props){
        super(props);
        this.state = {
            description: this.props.description
        }
    }

    render (){
        return (
            <div className={'home-page-desc'}>
                HOLY SHIT!! IT WORKED
            </div>
        );
    }
}
export default HomePageDescriptionComponent;