import React, { Component } from "react";
import AI from "../sketches/aiService";
import { connect } from 'react-redux';
import P5Wrapper from "react-p5-wrapper";
import sketchTest from "../sketches/sketchTest";
import sketchTest2 from "../sketches/sketchTest2";
import WordNotify from "./notifies/wordNotify";


class Test extends Component {
  constructor(props) {
    super(props);
    this.div1 = React.createRef();
    this.div2 = React.createRef();

    this.levelUp = this.handlerLevelUp.bind(this);
    this.renderWords = this.renderWords.bind(this);
    //this.handleAfter5s  = this.handleAfter5s.bind(this);
    this.renderNotify = this.renderNotify.bind(this);
    this.state = {
      isOwner: null,
      words: [],
      time: 20,
      level: 1,
      render: 1
    };
  }

  getRandom = (len,n) =>{
    let result = new Array(n);
    let taken = new Array(len);
    while(n--){
      let x = Math.floor((Math.random() * (len-1)));
      result[n] = x in taken ? taken[x] : x;
      taken[x] = --len in taken ? taken(len) : len;
    }
    return result;
  }

  renderWords=()=>{
    var ai = new AI();
    ai.readFile().then(data =>{
      ai.success(data)
      let ids = this.getRandom(ai.classNames.length,5);   //ti le ko deu lam thi phai
      let words =[];
      for (var i =0; i<5;i++){
        words[i]=ai.classNames[ids[i]];
      }
      this.setState({words:words});
    } );
  }

  handlerLevelUp = () => {
    if (this.state.level == 5) {
      console.log("End game! ");
      this.setState({ level: 1 });
    } else {

      this.setState({ level: this.state.level + 1, time: 20, render: 1 });
      //this.setState({time: 15});console.log(this.state.level);
    }
  }

  tick = () => {
    setInterval(() => {  // dem thoi gian de doi chu moi voi ca xoa canvas
      if (this.state.time > 0) {
        this.setState({ time: this.state.time - 1 });
      }

      else {
        this.handlerLevelUp();

      }
      if (this.state.time == 15) {
        this.setState({ render: 0 });
      }
    }, 1000);
  }

  componentWillMount() { 
    window.socket.on("server-set-owner",(isOwner)=>{
      this.setState({isOwner});
      console.log("long",isOwner)
    })
    window.socket.on("server-set-guess",(isOwner)=>{
      this.setState({isOwner}); console.log("long",isOwner)
    })
    if(this.state.isOwner){
      this.renderWords(); console.log("long owner")
      window.socket.emit("client-send-word", this.state.words[0], this.props.match.params.uid);
      this.tick();
    } else{
      this.setState({ isOwner: false });
      window.socket.on("server-send-word", (words) => { 
        this.setState({ words });
      });
      this.tick();
    }
    // if (this.props.match.params.uid === window.socket.id) {
    //   this.renderWords(); console.log("long owner")
    //   window.socket.emit("client-send-word", this.state.words[0], this.props.match.params.uid);
    //   this.tick();
    // }
    // else { console.log("long now owner");
    //   this.setState({ isOwner: false });
    //   window.socket.on("server-send-word", (words) => { 
    //     this.setState({ words });
    //   });
    //   this.tick();
    // }
  }
  componentWillUnmount() {
    clearInterval();
  }// là sao ?? cai ham level up kia

  renderNotify() {
    if (this.state.render == 1) {
      return (
        <WordNotify word={this.state.words[this.state.level-1]} time={this.state.time - 15} />
      )
    } else {
      return null
    }
  }

  // {if (this.props.socket.id == id.)}
  render() {
    // console.log(this.props.auth.uid);
    return (
      <div>
        <section className="match">
          <div class="board">
            <div class="board__avatar--left">
              <div class="board__avatar--name--left">
                Vipmath171
            </div>
              <img class="board__avatar--img" src="img/person2.png" alt="avatar" />
            </div>
            <div ref={this.div1} id="sketch1" className="board">
              <P5Wrapper socket={this.props.socket} roomId={this.props.match.params.id}
                text={this.state.words[this.state.level-1]} time={this.state.time}
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
              <img class="board__avatar--img" src="img/person2.png" alt="avatar" />
            </div>
            <div ref={this.div2} id="sketch2" class="board">
              <P5Wrapper socket={this.props.user.socket} roomId={this.props.match.params.id} sketch={sketchTest2} />
            </div>
          </div>
          <div>word</div>
        </section>
        <React.Fragment>
          {(this.state.words.length>0) ? this.renderNotify() : null
          }

        </React.Fragment>

      </div>
    );
  }
}



const mapStatetoProps = (state) => {
  return {
    user: state.user.currentUser,
    auth:state.user.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Test);
