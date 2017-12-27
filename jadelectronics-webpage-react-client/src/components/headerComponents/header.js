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

    openContactModal() {
        this.setState({ showContactModal: true });
    }

    openSocialMediaModal(){
        this.setState({showSocialMediaModal: true})
    }

    openResumeModal(){
        this.setState({showResumeModal: true});
    }

    openGitModal(){
        this.setState({showGitModal: true});
    }

    render() {
        return (
            <header>
                <div className={"homelink"}>
                    <Link to="/Home"> Home</Link>
                </div>

                <div className="logo_line_1">
                    Logo line one
                </div>
                <div className="logo_line_2">
                    Logo line two
                </div>

                <nav>
                    <ul>
                        <li className={"first"} onClick={this.openResumeModal}>
                            Resume
                        </li>
                        <li className={"last"} onClick={this.openGitModal}>
                            Git Repos
                        </li>
                    </ul>
                    <ul>
                        <li className="first" onClick={this.openContactModal}>
                            Contact Information

                        </li>
                        <li className="last" onClick={this.openSocialMediaModal}>
                            Social Media
                        </li>
                    </ul>
                </nav>

                <Modal show={this.state.showContactModal} onHide={this.closeContactModal} >
                    <Modal.Header closeButton className={"contact-modal"}>
                        <Modal.Title>Contact Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>
                                Cell Phone: 281-904-0410
                            </li>
                            <li>
                                Email: Mr.JADaigle@gmail.com
                            </li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeContactModal}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showSocialMediaModal} onHide={this.closeSocialMediaModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Social Media</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>
                                Facebook:
                            </li>
                            <li>
                                Instagram:
                            </li>
                            <li>
                                Snap Chat:
                            </li>
                            <li>
                                You Tube:
                            </li>
                            <li>
                                Linked In:
                            </li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeSocialMediaModal}>Close</Button>
                    </Modal.Footer>
                </Modal>


                <Modal show={this.state.showResumeModal} onHide={this.closeResumeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Resume</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeResumeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showGitModal} onHide={this.closeGitModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Git Repos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeGitModal}>Close</Button>
                    </Modal.Footer>
                </Modal>





            </header>
        );
    }
}

export default Header;