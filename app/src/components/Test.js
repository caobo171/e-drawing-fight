import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import sketchTest from "../sketches/sketchTest";
import sketchTest2 from "../sketches/sketchTest2";
import AI from "../sketches/aiService";

class Test extends Component {
  constructor(props){
    super(props);
    this.state = {
      word:"",
    };
  }
  
  componentDidMount (){
    var ai = new AI();
    ai.readFile().then(data =>{
      ai.success(data)
      var id = Math.floor((Math.random() * 344));   //ti le ko deu lam thi phai
      console.log(id);
      this.setState({word: ai.classNames[id]});
      console.log(ai.classNames);
      console.log(ai.classNames[id]);
    } );
   
  }
  
  render() {
  return (
    <div>
      <div>word+{this.state.word}</div>
      <P5Wrapper float="left"  sketch={sketchTest} />
      <P5Wrapper float="right" sketch={sketchTest2} />  
    </div>
  );
  }
}

export default Test;
