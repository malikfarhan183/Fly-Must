import React from "react";
// import AdminNavbar from "../../components/Navbars/AdminNavbar.jsx"
import { InputGroup, InputGroupAddon, Input, Button, Alert, UncontrolledAlert } from 'reactstrap';
// import ForgotPassword from "./forgotPassword.js";
import NotificationAlert from "react-notification-alert";

import './login.css'


var request = require("request");
// const url = ""
// const url = "http://localhost:1338"


const InputStyle={
  border: "1px solid #f4f4f4",
  color: "#525f7f",
  height:"40px",
  fontSize:"14px",
  borderLeft:"transparent",
  width:"85%",
  padding:"0px"
}

const loginTitle={
  color: "#f38f39",
  fontSize: "26px",
  fontWeight: "500",
  marginBottom:"30px",
  textAlign:"center",
}
// const forgotPasswordText={
//   fontSize:"10px",
//   color:'black',
//   textDecoration:"underline",
//   textAlign:"center",
//   cursor:"pointer"
// }


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      disableAlert:false,
      lock:false,
      email:'' ,
      password:''
    }
  }
  notify = (place, auth) => {
    console.log("Place :: ", place, auth);
    var type;
    var time;
    if(auth)
    {
      type="success";
      time=3
    }
    else {
      type="danger"
      time=4
    }

    var options = {};
    options = {
      place: place,
      message: (
        <div>
        {
          (auth)?
            <div>
              {this.message}
            </div>
            :
            <div>
            {this.message}
            </div>
        }
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: time
    };
    this.refs.notificationAlert.notificationAlert(options);
  };
  // onKeyUpfunc=(e)=>{
  //   console.log("e.keyCode" ,e.target.name);
  //   console.log(e.keyCode);
  //   if(e.keyCode===13){
  //     switch (e.target.name) {
  //       case 'email': this.emailRef.focus();
  //
  //         break;
  //           case 'password': this.passwordRef.focus();
  //             break;
  //       default:
  //            this.emailRef.focus();
  //     }
  //
  //   }
  // }



  componentDidMount()
  {

    var url = require('url');
    // const fetch = require('node-fetch');
    const urlObj = url.parse(document.location.href, true);

    console.log("urlObj.hostname.indexOf(localhost)",urlObj.hostname, urlObj.hostname.indexOf("localhost"), urlObj.hostname.indexOf("-dev"));
    if (urlObj.hostname.indexOf("localhost") === -1 && urlObj.hostname.indexOf("-dev") === -1 )
    {
      // global.baseUrl = "http://www.atms.pk"
      global.baseUrl = urlObj.protocol + '//' + urlObj.hostname
    }
    else
    {
      global.baseUrl = "http://atms-dev.herokuapp.com"
    }

    console.log("Base URL Set", global.baseUrl);
    this.url = global.baseUrl
    this.user_id=''
    this.token=null
    this.loginUserName=''
    this.loginUserNameType=''
    this.emailOfLogedInUser=''
    this.errMsg=''
    this.email=''
    this.password=''
  }
  onClickSignup=e=>{
    console.log("signuping ");
  }

  handleLogin=()=>
  {
    this.setState({
        disableAlert:true
    })
    this.message="You Are Loging In"
    this.notify("tc",true);
    setTimeout(()=>{
      window.location.href='/'
    }, 2000)
  }
  callbackGoBack=(e)=>
  {
    console.log("Go back bus recieved :: ", e);
    this.componentDidMount()
  }

  handleForgotPassword=()=>
  {
    console.log("forgot clicked ");
    this.props.history.push('/forgotpassword');

  }

  handleChange=(event)=>
  {
    console.log("Setting "+event.target.name + " to ", event.target.value);
    this.setState({[event.target.name]: event.target.value});

    if(event.target.name==='email')
    {
      this.setState({
        email:event.target.value
      })
      this.email=event.target.value
    }
    else if (event.target.name==='password')
    {
      this.setState({
        password:event.target.value
      })
      this.password=event.target.value
    }
  }

  render() {
      console.log("Render" , this.state.disableAlert);
      console.log("status false email  ....render " , this.state.email ,this.state.password );
    return (

        <div className="AdminLogin">

          <div className="react-notification-alert-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <div className="loginDiv">
            <div className="loginFormDiv">
                 <form onSubmit={this.handleLogin}>

                   <img className="logoimg" src="/Logo.png"/>
              <p style={loginTitle}>Login To Continue</p>
              <InputGroup style={{width:"100%"}}>
                <div className="fieldIcon"><i className="tim-icons icon-email-85"></i></div>
                <Input ref={(input)=>{
                  this.emailRef=input
                }}
                onKeyUp={this.onKeyUpfunc}type="text" style={InputStyle} placeholder="email" name="email" onChange={this.handleChange}/>
              </InputGroup>
              <InputGroup>
                <div className="fieldIcon"><i className="tim-icons icon-lock-circle"></i></div>

                <Input ref={(input)=>{
                  this.passwordRef=input
                }}onKeyUp={this.onKeyUpfunc} type="password" style={InputStyle} placeholder="password" name="password" onChange={this.handleChange} />
              </InputGroup>
            {/*  <p style={forgotPasswordText} onClick={this.handleForgotPassword}>forgot password?</p>*/}

              <div className="loginBtnDiv">
                <Button  className='loginBtn'
                      onKeyUp={this.onKeyUpfunc}
                       color='info' style={{width:"51%", marginTop:"25px"}} name='button' onClick={this.handleLogin} disabled={this.state.disableAlert}>

              {
              (this.state.disableAlert) ?
              <i className="fa fa-spinner fa-spin fa-1x fa-fw"></i>
              :  <span style={{display:'flex' , justifyContent:'center'}}><i style={{marginRight:'12px' , paddingTop:'3px'}}class="fa fa-user fa-fw"></i> <span>Login</span></span>
              }
                </Button>
              </div>
                  </form>
          { /*   <div>
              <span style={{cursor:'pointer',color:'royalblue', marginLeft:'70%',marginTop:'1%',textDecoration:'underline'}}onClick={this.onClickSignup}>Signup</span>
              </div>*/}
            </div>

          </div>


        </div>

    );
  }
}

export default Login;
