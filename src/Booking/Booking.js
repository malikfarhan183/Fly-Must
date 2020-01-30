import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Booking extends Component {
    state = {
        activeTab: "2",
    }
    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab })
        };
    }
    render() {
        return (
            <div>
                <div className="banner float-left w-100">
                    <Nav tabs className="m-auto w-50 float-none border-0">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                <i className="fas fa-plane-departure mr-2"></i> FLIGHTS
          </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                <i className="fas fa-bed mr-2"></i>HOTELS
          </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}
                            >
                                <i className="fas fa-plane-departure mr-2"></i><i className="fas fa-bed mr-2"></i>HOTELS + FLIGHTS
          </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '4' })}
                                onClick={() => { this.toggle('4'); }}
                            >
                                <i className="fas fa-umbrella-beach mr-2"></i>PACKAGES
          </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <Card body className="w-75 m-auto">
                                        <form>
                                            <input type="text" placeholder="Where are you going?" className="border-0 p-2" />
                                            <input type="num  " placeholder="Tue 9/3 - Tue 9/10" className="border-0 p-2" />
                                            <select className="border-0 p-2">
                                                <option>2 adults. 0 children. 1 room</option>
                                                <option>2 adults. 0 children. 1 room</option>
                                                <option>2 adults. 0 children. 1 room</option>
                                                <option>2 adults. 0 children. 1 room</option>
                                            </select>
                                            <Button type="submit" className="font-weight-bold border-0"><i className="fas fa-search mr-3"></i>Search</Button>
                                            <div className="checkbox float-left">
                                                <input type="checkbox" className="d-inline" />
                                                <span className="text-white font-weight-bold float-left d-inline">Flights</span>
                                            </div>
                                        </form>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <Card body className="w-75 m-auto">
                                        <form>
                                            <input type="text" placeholder="Where are you going?" className="border-0 p-2" />
                                            <input type="num  " placeholder="Tue 9/3 - Tue 9/10" className="border-0 p-2" />
                                            <select className="border-0 p-2">
                                                <option>2 adults. 0 children. 1 room</option>
                                                <option>2 adults. 0 children. 1 room</option>
                                                <option>2 adults. 0 children. 1 room</option>
                                                <option>2 adults. 0 children. 1 room</option>
                                            </select>
                                            <Button type="submit" className="font-weight-bold border-0"><i className="fas fa-search mr-3"></i>Search</Button>
                                            <div className="checkbox float-left">
                                                <input type="checkbox" className="d-inline" />
                                                <span className="text-white font-weight-bold float-left d-inline">I'm travelling for work</span>
                                            </div>
                                        </form>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12">
                                    <Card body className="w-75 m-auto">
                                        <form>
                                            <input type="text" placeholder="Where are you going?" className="border-0 p-2" />
                                            <input type="num  " placeholder="Tue 9/3 - Tue 9/10" className="border-0 p-2" />
                                            <select className="border-0 p-2">
                                                <option>2 adults. 0 children. 1 room</option>
                                                <option>2 adults. 0 children. 1 room</option>
                                                <option>2 adults. 0 children. 1 room</option>
                                                <option>2 adults. 0 children. 1 room</option>
                                            </select>
                                            <Button type="submit" className="font-weight-bold border-0"><i className="fas fa-search mr-3"></i>Search</Button>
                                            <div className="checkbox float-left">
                                                <input type="checkbox" className="d-inline" />
                                                <span className="text-white font-weight-bold float-left d-inline">Hotels + Flights</span>
                                            </div>
                                        </form>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <Col sm="12">
                                    <Card body className="w-75 m-auto">
                                        <form>
                                            <input type="text" placeholder="Where are you going?" className="border-0 p-2" />
                                            <input type="num  " placeholder="Tue 9/3 - Tue 9/10" className="border-0 p-2" />
                                            <select className="border-0 p-2">
                                                <option>2 adults. 0 children. 1 room</option>
                                                <option>2 adults. 0 children. 1 room</option>
                                                <option>2 adults. 0 children. 1 room</option>
                                                <option>2 adults. 0 children. 1 room</option>
                                            </select>
                                            <Button type="submit" className="font-weight-bold border-0"><i className="fas fa-search mr-3"></i>Search</Button>
                                            <div className="float-left w-100">
                                                <div className="checkbox float-lg-left float-md-none">
                                                    <input type="checkbox" className="d-inline" />
                                                    <span className="text-white font-weight-bold float-left d-inline">Packages</span>
                                                </div>
                                            </div>
                                        </form>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        );
    }
}
export default Booking;