import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Logo from '../assets/Logo.png';

class Header extends Component {

    render() {

        return (
            <div>
                <header className="float-left w-100 header">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <a className="navbar-brand text-center text-lg-left text-md-left text-sm-left" href="#"><img src={Logo} alt="logo" /></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link text-uppercase" href="#">My LIsts <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-uppercase" href="#">My Trips</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link  text-uppercase" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Support</a>
                                        </li>
                                        <li className="nav-item text-center">
                                            <a className="nav-link text-uppercase w-100" href="#">login</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
export default Header;