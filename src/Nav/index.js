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
  	<h1 className="logoName">M = M</h1>
    <div class="ui inverted segment">
      <div class="ui inverted pointing secondary menu">
        <a class="active item" onClick={this.loggingOut}>Logout</a>
        <a class="item" onClick={this.loggingIn}>Login</a>
        <a class="item" onClick={this.deletingUser}>Delete Account</a>
      </div>
              <img src={this.props.image} className="ProfileImg"/>
    </div>


      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
  </div>
    )
  }
}
export default NavBar;


//    <button className="logout" onClick={this.toggle}>M = M</button>

  // <div className="modal">
  //   <Form inline onSubmit={(e) => e.preventDefault()}>
  //        <Button color="danger" onClick={this.toggle}>Open</Button>
  //           </Form>
  //         <Modal returnFocusAfterClose={this.state.focusAfterClose} isOpen={this.state.open}>
  //       <ModalBody>
  //       <p>Welcome to <strong>Motivation = Movement</strong>
  //     <br/>Every day you'll have motivational quotes<br/> 
  //         to help you stay positive and ready to conquer the day! There will be an 'action' of the day for you as well! This might be something silly to get you thinking like a kid again,<br/>
  //          or something that could become a habit!<br /> These tasks have came from successful poeple from all walks of life.<br/>
  //          I, for one, think anyone is capable of success if they put their mind to it!<br/> </p>
            
  //       </ModalBody>
  //       <ModalFooter>
  //           <Button className="close" onClick={this.toggle}>Close</Button>
  //       </ModalFooter>
  //   </Modal>
  //    </div>














