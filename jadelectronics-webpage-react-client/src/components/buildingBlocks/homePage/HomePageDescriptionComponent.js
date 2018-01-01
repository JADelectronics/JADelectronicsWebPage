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
                <p className={'text-wrap'}>
                    <br/><br/>
                    Hello World!<br/>
                    ….Welcome to mine. Or a least a very small piece of mine….<br/>
                    In the last few years, I have had some amazing opportunities to explore new places, new hobbies and new skills. Over the course of about the last 3 years I have come to two very obvious conclusions.

                    <br/><br/>
                    -- 1 --<br/> I am absolutely addicted to challenging myself. I love to push my mind and body in all aspects of life. I love teaching myself new skills, both technical and physical, as well as pushing my body to be the best that it can be.<br/>
                    -- 2 --<br/> 99% of the population is afraid to be given a challenge or to challenge themselves…. And it drives me absolutely crazy.<br/>

                    <br/><br/>
                    Now, I can’t change everyone in the world, but maybe I can change the way people see the world. I want people to open their eyes, to see the challenges of everyday life, to see the problems, and do something about it.

                    <br/><br/>
                    You see something wrong that has “always been that way”?<br/><font color="red">Challenge it anyway!</font><br/>
                    You don’t know how to do something?<br/><font color="red">Learn it anyway!</font><br/>
                    You’re afraid of events to come?<br/><font color="red">Embrace it anyway!</font><br/>
                    You are afraid something is to hard?<br/><font color="red">Do it anyway!</font><br/>

                    <br/><br/>
                    I have heard so many people say “I don’t know how”, “I am afraid to try”, or “its too hard” It’s to this way of thinking I say <font color="red">“so the fuck what, do it anyway”</font>.
                    You can achieve anything you want if you put your mind to it, you just have to want it bad enough.

                    <br/><br/>
                    Now, I know quite a few people want to have this mind set but don’t know how to get started. That’s what I am hoping my page will help. Below I have two links, one for the brain, one for the body. As I have gone through life I have faced things that have challenged my brain, body and way of thinking. I have also challenged myself to force myself to grow and improve. The two links below contain the opinions formed and knowledge developed. So go ahead and take a look around, I have everything from forums to tutorials.

                    <br/><br/>
                    If you have any questions, comments, or just want to start a conversation in general, don’t be afraid to reach out.
                </p>
            </div>
        );
    }
}
export default HomePageDescriptionComponent;