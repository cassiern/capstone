import React, {Component} from 'react';
import App from '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Segment } from 'semantic-ui-react'


class NavBar extends Component {
  constructor(){
  	super();
  	this.state = {
  		showStartModal: false,
  		open: false,
      focusAfterClose: true,
      activeItem: 'home' 
  }
  	   this.toggle = this.toggle.bind(this);
  	   this.handleSelectChange = this.handleSelectChange.bind(this);
}
    toggle() {
        this.setState(({ open }) => ({ open: !open }));
    }

    handleSelectChange({
      target: { value }
    }) {
        this.setState({ 
          focusAfterClose: JSON.parse(value) 
        });
    }


    // handleItemClick = (e, { name }) => {
    //   this.setState({ 
    //     activeItem: name 
    //     )}
    // })

    deletingUser = (e) => {
      this.props.deleteUser();
    }

    loggingOut = (e) => {
    	this.props.logout()
    }
    loggingIn = (e) => {
    	this.props.login()
    }
    showStartModal = (e) => {
    	this.setState({
    		showStartModal: !this.state.showStartModal
    	})
    }

render(){
    
    const { activeItem } = this.state
  
  return(
  	<div className="navBar">
    {this.props.user ?
      <div class="ui inverted pointing secondary menu">
        <a class="item" onClick={this.loggingOut}>Logout</a>
        <a class="item" onClick={this.loggingIn}>Login</a>
        <a class="item" onClick={this.deletingUser}>Delete Account</a>
        <a class="item" href="/home"><img src={this.props.image} class="ProfileImg"/></a>
      </div>
      :
      <div class="ui inverted pointing secondary menu">
          <h1 className="logoName">M = M
          <h6>Motivation = Movement</h6>
          </h1>

          <a class="item" className="loginOnFirst" onClick={this.loggingIn}>Login</a>
      </div>
    }


  </div>
    )
  }
}
export default NavBar;















