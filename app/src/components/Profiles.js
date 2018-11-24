import React, { Component } from "react";
import { getUserByID } from "../actions/userActions";
import { connect } from "react-redux";
class Profile extends Component {
  componentDidMount() {
    console.log("long param", this.props.match.params.id);
    this.props.getUserByID(this.props.match.params.id);
  }
  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        {user.name && (
          <div>
            <section className="profile">
              <div className="row">
                <div className="col span-4-of-8">
                  <div className="profile__character">
                    <div className="profile__character--div">
                      <img
                        src={user.avatar}
                        alt="avatar"
                        className="profile__character--avatar"
                      />
                      <div className="profile__character--achievement">
                        <div className="profile__character--achievement--item">
                          <i className="fas fa-coins profile__character--achievement--icon" />
                          <p className="profile__character--achievement--number">
                            500
                          </p>
                        </div>
                        <div className="profile__character--achievement--item">
                          <i className="fas fa-award profile__character--achievement--icon" />
                          <p className="profile__character--achievement--number">
                            God
                          </p>
                        </div>
                        <div className="profile__character--achievement--item">
                          <i className="fas fa-star profile__character--achievement--icon" />
                          <p className="profile__character--achievement--number">
                            10
                          </p>
                        </div>
                        <div className="profile__character--achievement--item">
                          <i className="fas fa-chess-queen profile__character--achievement--icon" />
                          <p className="profile__character--achievement--number">
                            <span className="profile__character--achievement--quote">
                              #
                            </span>
                            10
                          </p>
                        </div>
                        <div className="profile__character--achievement--item">
                          <i className="far fa-chart-bar profile__character--achievement--icon" />
                          <p className="profile__character--achievement--number">
                            30{" "}
                            <span className="profile__character--achievement--quote">
                              %
                            </span>
                          </p>
                        </div>
                        <div className="profile__character--achievement--item">
                          <i className="fas fa-list-ol profile__character--achievement--icon" />
                          <p className="profile__character--achievement--number">
                            100
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col span-4-of-8">
                  <div className="profile__information">
                    <form className="form profile__form">
                      <div className="form__control">
                        <label
                          for=""
                          className="form__title profile__form__title"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="form__input"
                          value={user.name}
                          disabled
                        />
                      </div>
                      <div className="form__control">
                        <label
                          for=""
                          className="form__title profile__form__title"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          className="form__input"
                          value="vipmath171@gmail.com"
                          disabled
                        />
                      </div>
                      <div className="form__control">
                        <label
                          for=""
                          className="form__title profile__form__title"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form__input"
                          value="09629202"
                          disabled
                        />
                      </div>{" "}
                      <input
                        onClick={()=>{this.props.history.push('/')}}
                        className="form__submit profile__form__submit btn"
                        type="submit"
                        value="Back to DashBoard"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </React.Fragment>
    );
  }
}
const mapStatetoProps = state => {
  return {
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserByID: id => {
      dispatch(getUserByID(id));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Profile);
