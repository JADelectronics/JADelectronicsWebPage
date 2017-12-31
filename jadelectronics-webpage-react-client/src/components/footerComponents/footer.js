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
                    So what ... do it anyway

                </div>
                <div className={"img-center"}>
                    <img src="http://ec2-34-229-196-51.compute-1.amazonaws.com:3001/images/getLogoThumbnail" className={"img-center"}></img>
                </div>

                <nav>
                    <ul>
                        <li className={'first'} onClick={this.openResumeModal}>
                            Resume
                        </li>
                        <li onClick={this.openAboutMeModal}>
                            About Me
                        </li>
                        <li className={'last'}>
                            <a href="https://www.youtube.com/channel/UCxltDhD1niv4O0si88DafsA">YouTube</a>
                        </li>
                    </ul>
                </nav>

                <Modal show={this.state.showResumeModal} onHide={this.closeResumeModal}>
                    <Modal.Header closeButton className={"resume-modal-header"}>
                        <Modal.Title>Resume</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={"resume-modal-body"}>
                        <embed src="http://ec2-34-229-196-51.compute-1.amazonaws.com:3001/documents/getResume" frameborder="0" width="100%" height="400px"></embed>
                    </Modal.Body>
                    <Modal.Footer className={"resume-modal-footer"}>
                        <Button onClick={this.closeResumeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showAboutMeModal} onHide={this.closeAboutMeModal}>
                    <Modal.Header closeButton className={"about-me-modal-header"}>
                        <Modal.Title>About Me</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={"about-me-modal-body"}>
                        <p className={"text-right"}>put a little bio here</p>
                        <img src="http://ec2-34-229-196-51.compute-1.amazonaws.com:3001/images/getCatThumbnail" className={"img-left"}></img>
                    </Modal.Body>
                    <Modal.Footer className={"about-me-modal-footer"}>
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