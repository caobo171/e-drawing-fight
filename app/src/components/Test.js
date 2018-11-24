import React, { Component } from "react";
import {connect} from 'react-redux';
// <<<<<<< long04
// =======
// import io from "socket.io-client";
// >>>>>>> master
import P5Wrapper from "react-p5-wrapper";
import sketchTest from "../sketches/sketchTest";
import sketchTest2 from "../sketches/sketchTest2";
import AI from "../sketches/aiService";
import { getCurrentUser} from '../actions/authActions';

class Test extends Component {
  constructor(props){
    super(props); 

    this.levelUp = this.handlerLevelUp.bind(this);

    this.state = {
      word:"",
      time:15,
      level:1,
    };
  }

  handlerLevelUp = () => {
    if(this.state.level == 5){
      console.log("End game!");
      this.setState({level : 1});
    } else{
      this.setState({level : this.state.level +1});
      this.renderWord();
      this.setState({time: 15});console.log(this.state.level);
    }

  }

  renderWord(){
    var ai = new AI();
    ai.readFile().then(data =>{
      ai.success(data)
      var id = Math.floor((Math.random() * 344));   //ti le ko deu lam thi phai
      this.setState({word: ai.classNames[id]});
    } );
  }
  
  componentDidMount (){
    //this.props.logIn({"aaa","aaaa"});
    this.props.getCurrentUser();
    this.renderWord();
    setInterval(()=>{  // dem thoi gian de doi chu moi voi ca xoa canvas
      if(this.state.time>0){
        this.setState({time: this.state.time - 1});} 

      else{ this.handlerLevelUp();

      }
    },1000);
  }
  componentWillUnmount(){
    clearInterval();
  }// là sao ?? cai ham level up kia
  
  render() {
  return (
    <div>
      <div>word {this.state.word}</div>
      <div>{this.state.time}</div> 
      <div id="sketch1"> <P5Wrapper float="left" socket={this.props.socket} text={this.state.word} time={this.state.time} levelUp={this.levelUp} sketch={sketchTest} /></div>
      <div id= "sketch2"> <P5Wrapper float="right" socket={this.props.socket}  sketch={sketchTest2} /> </div> 
    </div>
  );
  }
}

const mapStatetoProps = (state)=>{
  return{
    socket: state.user.currentUser.socket
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getCurrentUser: (creds) => {
      dispatch(getCurrentUser(creds));
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Test);
