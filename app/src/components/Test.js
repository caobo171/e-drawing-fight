import React, { Component } from "react";
import AI from "../sketches/aiService";
import { connect } from 'react-redux';
import P5Wrapper from "react-p5-wrapper";
import sketchTest from "../sketches/sketchTest";
import sketchTest2 from "../sketches/sketchTest2";
import WordNotify from "./notifies/wordNotify";
import WinNotify from "./notifies/winNotify";
import LoseNotify from "./notifies/loseNotify";
import DrawNotify from "./notifies/drawNotify";

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
      myScore:0,
      yourScore:0,
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

  handleTimeOut = () => {
    if(this.state.level<=5){
      this.setState({ level: this.state.level + 1, time: 20, render: 1 });
    }
  }

  checkEndGame = () =>{
    if (this.state.level > 5 ) {
      console.log("End game! ");
      if(this.state.myScore>this.state.yourScore){
        this.setState({render:2})
      } else if (this.state.myScore === this.state.yourScore){
        this.setState({render:3})
      }else {
        this.setState({render:4})
      }
      console.log("long", this.state.render);
    }
  }

  handlerLevelUp = () => { console.log("long trying",this.state.level);
    window.socket.emit("client-level-up",this.props.match.params.id);
    if(this.state.level<=5){
      this.setState({ level: this.state.level + 1, time: 20, render: 1});
      this.setState((state)=>({myScore:state.myScore+1}));
    }
    this.checkEndGame();
  }

  tick = () => {
    setInterval(() => {  // dem thoi gian de doi chu moi voi ca xoa canvas
      if (this.state.time > 0) {
        this.setState({ time: this.state.time - 1 });
      }
      else{ 
        this.handleTimeOut();console.log("long tick one")
      }
      if (this.state.time == 15) {
        this.setState({ render: 0 });
      }
    }, 1000);
  }

  componentWillMount() { 
    window.socket.on("server-set-owner",async (isOwner)=>{
      await this.renderWords(); console.log("long",this.state.words)
      window.socket.emit("client-send-word", this.state.words, this.props.match.params.id);
      this.setState({isOwner});
      console.log("long",isOwner);
    })
    window.socket.on("server-set-guess",async(isOwner)=>{
      await window.socket.on("server-send-word",(words) => { 
        this.setState({ words });
      });
      this.setState({isOwner}); console.log("long",isOwner);
    })
    this.tick();
  }

  componentDidMount(){
    window.socket.on("server-level-up",()=>{ console.log("long level up");
      if(this.state.level<=5){
        this.setState({ level: this.state.level + 1, time: 20, render: 1 });
        this.setState((state)=>({yourScore: state.yourScore+1}));
      }
      this.checkEndGame();
    });
  }

  componentWillUnmount() {
    clearInterval();
  }

  renderNotify() {
    switch (this.state.render){
      case 1:
        return (
          <WordNotify word={this.state.words[this.state.level-1]} time={this.state.time - 15} 
                level = {this.state.level}/>
        );
      case 2:
        return (
          <WinNotify/>
        );
      case 3:
        return (
          <DrawNotify/>
        );
      case 4:
        return(
          <LoseNotify/>
        );
      default:
        return null;
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
              <P5Wrapper socket={this.props.user.socket} roomId={this.props.match.params.id}
                text={this.state.words[this.state.level-1]} time={this.state.time}
                levelUp={this.levelUp} sketch={sketchTest} />
            </div>
          </div>

          <div class="match__score">
            {this.state.myScore} : {this.state.yourScore}
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
          {(this.state.isOwner!=null) ? this.renderNotify() : null
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
