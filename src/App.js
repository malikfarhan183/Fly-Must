import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import Header from './Header/Header';
import Booking from './Booking/Booking';
import Experience from './Experience/Experience';
import Footer from './Footer/Footer';
import Privacy from './Privacy/Privacy';
import MyLists from './MyLists/MyLists';
import MyTrips from './MyTrips/MyTrips';
import Support from './Support/Support';



class App extends Component {
  constructor(props) {
  super(props);
  this.state={
    pageToLoad:<Booking />
  }
}
onClickMyListBtn = e => {
  console.log("onClickMyListBtn . . " , e);
  if(e==='myLists')
      {
        this.setState({
          pageToLoad:<Booking />,
          myListActive:true
        })
      }
  else if (e==='myTrips')
      {
    this.setState({
       pageToLoad:<MyTrips/>
     })
     }
    else{
      this.setState({
         pageToLoad:<Support/>
       })
    }
  }

  render() {
    return (
      <div>
        {/* header */}
        <Header myListActive={this.state.myListActive} onClickMyList={this.onClickMyListBtn}/>
        {/* banner */}
        {this.state.pageToLoad}
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
