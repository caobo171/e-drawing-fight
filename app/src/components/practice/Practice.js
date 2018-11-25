import React, { Component } from "react";
import { connect } from "react-redux";
import P5Wrapper from "react-p5-wrapper";
import sketchTest from "../../sketches/sketchTest";
import sketchTest2 from "../../sketches/sketchTest2";
import sketchPractice from "../../sketches/sketchPractice";
import AI from "../../sketches/aiService";
import WordNotify from "./WordNotify";

class Practice extends Component {
  constructor(props) {
    super(props);
    this.handleLevelUp = this.handleLevelUp.bind(this);
    this.state = {
      word: "",
      start: false
    };
  }
  handleLevelUp(state) {
    this.setState(state);
  }

  renderWord() {
    var ai = new AI();
    ai.readFile().then(data => {
      ai.success(data);
      var id = Math.floor(Math.random() * 344); //ti le ko deu lam thi phai
      this.setState({ word: ai.classNames[id] });
    });
  }

  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        {this.state.start ? (
          <div>
            <section className="match">
              <div className="board">
                <div className="board__avatar--right">
                  <div className="board__avatar--name--right">Vipmath171</div>
                  <img
                    className="board__avatar--img"
                    src={user.avatar}
                    alt="avatar"
                  />
                </div>
                <div className="board__dashboard">
                  <P5Wrapper
                    handleLevelUp={this.handleLevelUp()}
                    id="sketchPractice"
                  />
                </div>
              </div>
              <div className="match__score">1 : 0</div>
              <div className="match__timer">
                <i className="match__timer--clock far fa-clock" />
                <div className="match__timer--number">15</div>
              </div>
              <div className="board">
                <div className="board__avatar--right">
                  <div className="board__avatar--name--right">Vipmath171</div>
                  <img
                    className="board__avatar--img"
                    src="img/person2.png"
                    alt="avatar"
                  />
                </div>
                <div className="board__dashboard" />
              </div>
            </section>
            <WordNotify />
          </div>
        ) : (
          <Start />
        )}
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  return {
    user: state.user.currentUser,
    auth: state.user.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Practice);

function Start() {
  return (
    <div
      className=" notification"
      style={{
        height: "100vh",
        width: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: 90,
        opacity: 1
      }}
    >
      <div
        className="notification-word "
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          overflow: "hidden",
          opacity: 1
        }}
      >
        <div className="notification-word__content">
          <p className="notification-word__content--note">Draw 1/5 Words</p>
          <h1 className="heading-primary notification-word__content--word">
            <a>
              alo
            </a>
          </h1>
          <p className="notification-word__content--warning">
            Under 15s and continue in
            You have to draw each required word in 
            <span className="notification-word__content--warning--count-down">
              {" "}
              15{" "}
            </span>{" "}
            s
          </p>
        </div>
      </div>
    </div>
  );
}
