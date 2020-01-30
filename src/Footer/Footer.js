import React, { Component } from 'react';
import border from '../assets/border.png';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer float-left w-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <h5 className="text-uppercase mb-2">Company</h5>
                                <img src={border} className="mb-2" />
                                <ul className="list-unstyled m-0 p-0">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Press</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Security</a></li>
                                    <li><a href="#">Center</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <h5 className="text-uppercase mb-2">infromation</h5>
                                <img src={border} className="mb-2" />
                                <ul className="list-unstyled m-0 p-0">
                                    <li><a href="#">Hotels</a></li>
                                    <li><a href="#">Places of Interest</a></li>
                                    <li><a href="#">Homes</a></li>
                                    <li><a href="#">Apartments</a></li>
                                    <li><a href="#">Resorts</a></li>
                                    <li><a href="#">Villas</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <h5 className="text-uppercase mb-2">infromation</h5>
                                <img src={border} className="mb-2" />
                                <ul className="list-unstyled m-0 p-0">
                                    <li><a href="#">Customer Service</a></li>
                                    <li><a href="#">Recommend a hotel</a></li>
                                    <li><a href="#">Signup a hotel</a></li>
                                    <li><a href="#">Jobs</a></li>
                                    <li><a href="#">Press</a></li>
                                    <li><a href="#">Terms of use</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <h5 className="text-uppercase mb-2">Subscribe Now</h5>
                                <img src={border} className="mb-2" />
                                <form>
                                    <input type="email" placeholder="Your Email" />
                                    <button className="text-center text-white font-weight-bold" type="submit">Subscribe now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Footer;