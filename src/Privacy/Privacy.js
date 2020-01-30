import React, { Component } from 'react';

class Privacy extends Component {
    render() {
        return (
            <div className="float-left w-100 privacy mb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 text-center text-lg-left text-md-left text-sm-left">
                            <span><i className="far fa-copyright"></i> 2019 FlyMush. All rights reserved</span>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 text-lg-right text-md-right text-sm-right text-center">
                            <ul className="list-unstyled m-auto m-lg-0 m-md-0 md-sm-0 w-50 w-lg-auto w-md-auto w-sm-auto p-0 float-lg-right float-md-right float-sm-right float-none">
                                <li className="d-lg-inline d-md-inline d-sm-inline float-lg-left float-md-left float-sm-left pr-lg-5 pr-md-5 pr-sm-5 pr-0"><a href="#">Terms of sevice</a></li>
                                <li className="d-lg-inline d-md-inline d-sm-inline float-lg-left float-md-left float-sm-left"><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Privacy;