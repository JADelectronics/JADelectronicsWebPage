import React from 'react';
import {Link} from 'react-router-dom';
import {Modal, Button, OverlayTrigger, Popover, Table} from 'react-bootstrap';


class Footer extends React.Component {

    static propTypes = {
        //no prop types yet
    }

    constructor(props){
        super(props);

        this.state = {
            showResumeModal: false,
            showAboutMeModal: false,
            showYouTubeModal: false
        }

        this.openResumeModal = this.openResumeModal.bind(this);
        this.closeResumeModal = this.closeResumeModal.bind(this);
        this.openAboutMeModal = this.openAboutMeModal.bind(this);
        this.closeAboutMeModal = this.closeAboutMeModal.bind(this);
        this.openYouTubeModal = this.openYouTubeModal.bind(this);
        this.closeYouTubeModal = this.closeYouTubeModal.bind(this);
    }

    openResumeModal(){
        this.setState({showResumeModal: true})
    }

    closeResumeModal(){
        this.setState({showResumeModal: false})
    }

    openAboutMeModal(){
        this.setState({showAboutMeModal: true})
    }

    closeAboutMeModal(){
        this.setState({showAboutMeModal: false})
    }

    openYouTubeModal(){
        this.setState({showYouTubeModal: true})
    }

    closeYouTubeModal(){
        this.setState({showYouTubeModal: false})
    }


    render(){
        return (
            <footer>
                <div className={'logo'}>
                    logo line one logo line two

                </div>
                <div className={"img-center"}>
                    <img src="file:///Users/jadaigle/hiveMind/personal/hobbies/software/jadElectronicArtsCode/public/JADelectronicsWebPage/jadelectronics-webpage-react-client/src/assets/dragon.png" className={"img-center"}></img>
                </div>

                <nav>
                    <ul>
                        <li className={'first'} onClick={this.openResumeModal}>
                            Resume
                        </li>
                        <li onClick={this.openAboutMeModal}>
                            About Me
                        </li>
                        <li className={'last'} onClick={this.openYouTubeModal}>
                            You Tube
                        </li>
                    </ul>
                </nav>

                <Modal show={this.state.showResumeModal} onHide={this.closeResumeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Resume</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        body text will go here.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeResumeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showAboutMeModal} onHide={this.closeAboutMeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>About Me</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeAboutMeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showYouTubeModal} onHide={this.closeYouTubeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>You Tube</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeYouTubeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </footer>
        )
    }
}
export default Footer;