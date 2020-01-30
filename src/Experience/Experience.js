import React, { Component } from 'react';
import image1 from '../assets/mosque.jpg';

class Experience extends Component {
    render() {
        return (
            <div className="float-left w-100 experience">
                <div className="container">
                    <div className="heading float-left w-100 text-center">
                        <h1 className="text-uppercase">Choose your Experience</h1>
                        <p>Discover travel that stirs you soul</p>
                    </div>
                    <div className="experiende-cards float-left w-100">
                        <div className="row">
                            <div className="col-lg-6 pr-0 mb-2 mb-lg-0 ">
                                <a href="#">
                                    <div className="content float-left w-100 position-relative">
                                        <img src={image1} alt="mosque" />
                                        <div className="bottom-content float-left w-100 position-absolute">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <strong className="float-left w-100 text-dark">Istanbul Vacation Packages</strong>
                                                    <span className="text-white font-weight-bold">8.5</span>
                                                    <label className="m-0 ml-2">
                                                        <span>Excellent</span>
                                                        <p className="m-0 text-dark">10,401 reviews</p>
                                                    </label>
                                                </div>
                                                <div className="col-lg-4 text-right">
                                                    <strong className="text-dark">Rs, 118,000/-</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-6  ">
                                <div className="row">
                                    <div className="col-lg-6  mb-2 mb-lg-0 pr-0">
                                        {/* <img src={image1} alt="houses" className=" w-100" /> */}
                                        <a href="#">
                                            <div className="content float-left w-100 position-relative">
                                                <img src={image1} alt="mosque" />
                                                <div className="bottom-content float-left w-100 position-absolute">
                                                    <div className="row">
                                                        <div className="col-lg-7 pr-0">
                                                            <strong className="float-left w-100 text-dark second">Caribe Royale Orlando</strong>
                                                            <span className="text-white font-weight-bold">8.7</span>
                                                            <label className="m-0 ml-2">
                                                                <span>Excellent</span>
                                                                <p className="m-0 text-dark">10,401 reviews</p>
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-5 text-right">
                                                            <strong className="text-dark second">Rs, 20,000/-</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-6  pr-0">
                                        <a href="#">
                                            <div className="content float-left w-100 position-relative">
                                                <img src={image1} alt="mosque" />
                                                <div className="bottom-content float-left w-100 position-absolute">
                                                    <div className="row">
                                                        <div className="col-lg-7 pr-0">
                                                            <strong className="float-left w-100 text-dark second">Caribe Royale Orlando</strong>
                                                            <span className="text-white font-weight-bold">8.7</span>
                                                            <label className="m-0 ml-2">
                                                                <span>Excellent</span>
                                                                <p className="m-0 text-dark">10,401 reviews</p>
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-5 text-right">
                                                            <strong className="text-dark second">Rs, 20,000/-</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Experience;