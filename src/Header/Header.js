import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Logo from '../assets/Logo.png';
import { withRouter } from "react-router";


class Header extends Component {
  constructor(props) {
  super(props);
  this.state={
  }
}
onClickLogin = e => {
  console.log("onClickLogin");
  this.props.history.push('/login')
  // window.location.href='/login'
}

    render() {
      console.log("render" , this.props);
        return (
            <div>
                <header className="float-left w-100 header">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <a className="navbar-brand text-center text-lg-left text-md-left text-sm-left"><img src={Logo} alt="logo" /></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active" onClick={()=>this.props.onClickMyList('myLists')}>
                                            <a style={{cursor:'pointer'}}  className="nav-link text-uppercase">My LIsts <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item"  onClick={()=>this.props.onClickMyList('myTrips')} >
                                            <a style={{cursor:'pointer'}} className="nav-link text-uppercase">My Trips</a>
                                        </li>
                                        <li className="nav-item dropdown" onClick={()=>this.props.onClickMyList('support')}>
                                            <a style={{cursor:'pointer'}} className="nav-link  text-uppercase" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Support</a>
                                        </li>
                                        <li onClick={this.onClickLogin}
                                            className="nav-item text-center"
                                            style={{cursor:'pointer'}}>

                                            <a className="nav-link text-uppercase w-100">login</a>
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
export default withRouter(Header);
