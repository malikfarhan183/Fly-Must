import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import Header from './Header/Header';
import Booking from './Booking/Booking';
import Experience from './Experience/Experience';
import Footer from './Footer/Footer';
import Privacy from './Privacy/Privacy';

class App extends Component {
  render() {
    return (
      <div>
        {/* header */}
        <Header />
        {/* banner */}
        <Booking />
        {/*Experience */}
        <Experience />
        {/*Footer */}
        <Footer />
        {/*Privacy*/}
        <Privacy />
      </div>
    );
  }
}
export default App;
