import React from "react";
import { connect } from "react-redux";

class Global extends React.Component {
  state = {
    ischallenged: false
  };
  componentDidMount() {
    if (window.socket) {
      console.log("long socket ok ok");
      window.socket.on("challenge", () => {
        console.log("long challenge");
        this.setState({ ischallenged: true });
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.ischallenged && (
          <div className="popup-simple notification-challenge">
            <div className="notification-challenge__avatar">
              <div className="notification-challenge__avatar--group">
                <img
                  src="https://cdn0.iconfinder.com/data/icons/superuser-web-kit/512/686909-user_people_man_human_head_person-512.png"
                  alt="avatar"
                  className="notification-challenge__avatar--group--img"
                />
                <p className="notification-challenge__avatar--group--name">
                  Vipmath171
                </p>
              </div>
              <p className="notification-challenge__avatar--content">
                is challenging you
              </p>

              <button className="btn-teal">accept</button>
              <button className="btn-blue">decline</button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStatetoProps = state => {
  return {
    socket: state.user.currentUser.socket
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Global);
