import React, { Component } from "react";
import ReactDOM from "react-dom";
import P5Wrapper from "react-p5-wrapper";
import sketchTest from "../sketches/sketchTest";
import sketchTest2 from "../sketches/sketchTest2";
import AI from "../sketches/aiService";

class Test extends Component {
  constructor(props){
    super(props);
    this.state = {
      word:"",
      time:15,
    };
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
    this.renderWord();
    setInterval(()=>{  // dem thoi gian de doi chu moi voi ca xoa canvas
      if(this.state.time>0){
        this.setState({time: this.state.time - 1});}
      else{
        this.renderWord();
        this.setState({time: 15});
        var element1 = <P5Wrapper float="left" text={this.state.word} sketch={sketchTest} />
        var element2 =  <P5Wrapper float="right"  sketch={sketchTest2} />
        ReactDOM.render(element1, document.getElementById('sketch1'));
        ReactDOM.render(element2, document.getElementById('sketch2'));
      }
    },1000);
  }

  componentWillUnmount(){
    clearInterval();
  }
  
  render() {
  return (
    <div>
      <div>word {this.state.word}</div>
      <div>{this.state.time}</div>
      <div id="sketch1"> <P5Wrapper float="left" text={this.state.word} sketch={sketchTest} /></div>
      <div id= "sketch2"> <P5Wrapper float="right"  sketch={sketchTest2} /> </div> 
    </div>
  );
  }
}

export default Test;
