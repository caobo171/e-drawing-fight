import React, { Component } from "react";
import {connect} from 'react-redux';
import P5Wrapper from "react-p5-wrapper";
import sketchTest from "../sketches/sketchTest";
import sketchTest2 from "../sketches/sketchTest2";
import AI from "../sketches/aiService";


class Practice extends Component {
  constructor(props){
    super(props); 
    this.div1 = React.createRef();
    this.div2 = React.createRef();

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
    setInterval(()=>{  // dem thoi gian de doi chu moi voi ca xoa canvas
      if(this.state.time>0){
        this.setState({time: this.state.time-1 });} 

      else{ this.handlerLevelUp();

      }
    },1000);
  }
  componentWillUnmount(){
    clearInterval();
  }// là sao ?? cai ham level up kia
  
  render() {
    if(!this.props.auth){
      this.props.history.push('/');
    }
    console.log("long",this.props.user, "  ", this.props.match.params.id)
    if(this.props.user.uid===this.props.match.params.id){
      this.renderWord();
    }
   // console.log(this.props.auth.uid);
  return (
    <div>
      <section className="match">
        <div class="board">
          <div class="board__avatar--left">
            <div class="board__avatar--name--left">
                Vipmath171
            </div>
            <img class="board__avatar--img" src="img/person2.png" alt="avatar"/>
          </div>
          <div ref ={this.div1} id="sketch1" className="board">
            <P5Wrapper socket={this.props.socket} roomId={this.props.match.params.id}
              text={this.state.word} time={this.state.time} 
              levelUp={this.levelUp} sketch={sketchTest} />
          </div>
        </div>

        <div class="match__score">
            1 : 0
        </div>

        <div class="match__timer">
            <i class="match__timer--clock far fa-clock"></i>
            <div class="match__timer--number">
             {this.state.time}
            </div>
        </div>

        <div class="board">
            <div class="board__avatar--right">
                <div class="board__avatar--name--right">
                    Vipmath171
                </div>
                <img class="board__avatar--img" src="img/person2.png" alt="avatar"/>
            </div>
            <div ref = { this.div2} id="sketch2" class="board">
              <P5Wrapper  socket={this.props.user.socket} roomId = {this.props.match.params.id}  sketch={sketchTest2} />
            </div>
        </div>
        <div>word {this.props.word}</div>
      </section>
    </div>
  );
  }
}



const mapStatetoProps = (state)=>{
  return{
    user: state.user.currentUser,
    auth:state.user.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
 
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Practice);
