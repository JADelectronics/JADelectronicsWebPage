//external imports
import React from 'react';
import {Link} from 'react-router-dom';
import {Modal, Button, OverlayTrigger, Popover, Table} from 'react-bootstrap';
import {Tabs, Tab} from 'react-bootstrap';
import PropTypes from 'prop-types';


class Header extends React.Component {

    static propTypes = {
        //no prop types yet
    };

    constructor(props) {
        super(props);

        this.state = {
            showContactModal: false,
            showSocialMediaModal: false,
            showResumeModal: false,
            showGitModal: false
        };

        this.openContactModal = this.openContactModal.bind(this);
        this.closeContactModal = this.closeContactModal.bind(this);
        this.openSocialMediaModal = this.openSocialMediaModal.bind(this);
        this.closeSocialMediaModal = this.closeSocialMediaModal.bind(this);
        this.openResumeModal = this.openResumeModal.bind(this);
        this.closeResumeModal = this.closeResumeModal.bind(this);
        this.openGitModal = this.openGitModal.bind(this);
        this.closeGitModal = this.closeGitModal.bind(this);
        this.openAboutMeModal = this.openAboutMeModal.bind(this);
        this.closeAboutMeModal = this.closeAboutMeModal.bind(this);
    }

    closeContactModal() {
        this.setState({ showContactModal: false });
    }

    closeSocialMediaModal(){
        this.setState({showSocialMediaModal: false});
    }

    closeResumeModal(){
        this.setState({showResumeModal: false});
    }

    closeGitModal(){
        this.setState({showGitModal: false});
    }

    closeAboutMeModal(){
        this.setState({showAboutMeModal: false});
    }

    openContactModal() {
        this.setState({ showContactModal: true });
    }

    openSocialMediaModal(){
        this.setState({showSocialMediaModal: true});
    }

    openResumeModal(){
        this.setState({showResumeModal: true});
    }

    openGitModal(){
        this.setState({showGitModal: true});
    }

    openAboutMeModal(){
        this.setState({showAboutMeModal: true});
    }

    render() {
        return (
            <header>
                <div className={"homelink"}>
                    <Link to="/"> Home</Link>
                </div>

                <div className="logo_line_1">
                    So the fuck what...
                </div>
                <div className="logo_line_2">
                    ...Do it anyway
                </div>

                <nav>
                    <ul>
                        <li className={"first"} onClick={this.openAboutMeModal}>
                            About Me
                        </li>
                        <li className={"first"} onClick={this.openResumeModal}>
                            Resume
                        </li>
                        <li className={"last"} onClick={this.openContactModal}>
                            Contact Information
                        </li>
                    </ul>
                    <ul>
                        <li className="first" onClick={this.openGitModal}>
                            Git Repos

                        </li>
                        <li className="last" onClick={this.openSocialMediaModal}>
                            Social Media
                        </li>
                    </ul>
                </nav>

                <Modal show={this.state.showContactModal} onHide={this.closeContactModal}>
                    <Modal.Header closeButton className={"contact-modal-header"}>
                        <Modal.Title>Contact Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={"contact-modal-body"}>
                        <ul>
                            <li>
                                Cell Phone ----- 281-904-0410
                            </li>
                            <li>
                                Email ----- Mr.JADaigle@gmail.com
                            </li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer className={"contact-modal-footer"}>
                        <Button onClick={this.closeContactModal}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showSocialMediaModal} onHide={this.closeSocialMediaModal}>
                    <Modal.Header closeButton className={"social-media-modal-header"}>
                        <Modal.Title>Social Media</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={"social-media-modal-body"}>
                        <ul>
                            <li>
                                Facebook: <a href="https://www.facebook.com/jacob.daigle.79">JAD's Facebook</a>
                            </li>
                            <li>
                                Instagram: <a href="https://www.instagram.com/jadaigle/">JAD's Instagram</a>
                            </li>
                            <li>
                                Snap Chat: <a href="https://www.snapchat.com/add/pc-projectiles">JAD's Snap Chat</a>
                            </li>
                            <li>
                                You Tube: <a href="https://www.youtube.com/channel/UCxltDhD1niv4O0si88DafsA">JAD's YouTube</a>
                            </li>
                            <li>
                                Linked In: <a href="https://www.linkedin.com/in/jacob-daigle-4164b179/">JAD's Linked In</a>
                            </li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer className={"social-media-modal-footer"}>
                        <Button onClick={this.closeSocialMediaModal}>Close</Button>
                    </Modal.Footer>
                </Modal>


                <Modal show={this.state.showResumeModal} onHide={this.closeResumeModal}>
                    <Modal.Header closeButton className={"resume-modal-header"}>
                        <Modal.Title>Resume</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={"resume-modal-body"}>
                        <embed src="http://localhost:3001/documents/getResume" frameborder="0" width="100%" height="400px"></embed>
                    </Modal.Body>
                    <Modal.Footer className={"resume-modal-footer"}>
                        <Button onClick={this.closeResumeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showGitModal} onHide={this.closeGitModal}>
                    <Modal.Header closeButton className={"git-modal-header"}>
                        <Modal.Title>Git Repositories</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={"git-modal-body"}>
                        <p>Most of the code I have written lives in the private repos of my previous employers, hover in the event you would like to see some of the public work I have done in my free time, please click the git link below. If you are interested in some of the work I have on my private git server, please don’t hesitate to reach out.  </p>
                        <a href="https://github.com/JADelectronics">Public Git Repos</a>
                    </Modal.Body>
                    <Modal.Footer className={"git-modal-footer"}>
                        <Button onClick={this.closeGitModal}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showAboutMeModal} onHide={this.closeAboutMeModal}>
                    <Modal.Header closeButton className={"about-me-modal-header"}>
                        <Modal.Title>About Me</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={"about-me-modal-body"}>
                        <p className={"text-right"}>
                            Hello World <br/>bio coming soon
                        </p>
                        <img src="http://localhost:3001/images/getCatThumbnail" className={"image-float-left"}></img>
                    </Modal.Body>
                    <Modal.Footer className={"about-me-modal-footer"}>
                        <Button onClick={this.closeAboutMeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </header>
        );
    }
}

export default Header;