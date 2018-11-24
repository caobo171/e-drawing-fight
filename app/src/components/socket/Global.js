import React from "react";
import { connect } from "react-redux";
import { setUsersOnline } from '../../actions/userActions';

class Global extends React.Component {
  state = {
    ischallenged: false,
    uid:null,
  };
  componentDidMount() {
    if (window.socket) {
      console.log("long socket ok ok");
      window.socket.on("challenge", (uid) => {
        console.log('cao da nhan duoc challeng')
        this.setState({ ischallenged: true,uid:uid});
      });

      window.socket.on("get-users",(data)=>{
        console.log('long data',data);
        this.props.setUsersOnline(data);
      })

      window.socket.on("server-change-route",(uid)=>{this.props.history.push('/testplay/'+uid);})
    }
  }

  handleAccept = () => {
    this.setState({ ischallenged: false });
    this.props.socket.emit("client-accept",this.state.uid);
    this.props.history.push('/testplay/'+this.state.uid);
  }

  handlerDecline = () =>{
    this.setState({ ischallenged: false });
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

              <button className="btn-teal" onClick={()=>this.handleAccept()}>accept</button>
              <button className="btn-blue" onClick={()=>this.handlerDecline()}>decline</button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUsersOnline: data => {
      dispatch(setUsersOnline(data));
    },
  };
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
