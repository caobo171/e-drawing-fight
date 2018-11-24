import React, { Component } from 'react'

 class Profile extends Component {
  render() {
    return (
      <div>
          <section className="profile">
        <div className="row">
            <div className="col span-4-of-8">
                <div className="profile__character">
                    <div className="profile__character--div">
                        <img src="img/person1.png" alt="avatar" className="profile__character--avatar" />
                        <div className="profile__character--achievement">
                            <div className="profile__character--achievement--item">
                                <i className="fas fa-coins profile__character--achievement--icon"></i>
                                <p className="profile__character--achievement--number">500</p>
                            </div>
                            <div className="profile__character--achievement--item">
                                <i className="fas fa-award profile__character--achievement--icon"></i>
                                <p className="profile__character--achievement--number">God</p>
                            </div>
                            <div className="profile__character--achievement--item">
                                <i className="fas fa-star profile__character--achievement--icon"></i>
                                <p className="profile__character--achievement--number">10</p>
                            </div>
                            <div className="profile__character--achievement--item">
                                <i className="fas fa-chess-queen profile__character--achievement--icon"></i>
                                <p className="profile__character--achievement--number"><span className="profile__character--achievement--quote">#</span>10</p>
                            </div>
                            <div className="profile__character--achievement--item">
                                <i className="far fa-chart-bar profile__character--achievement--icon"></i>
                                <p className="profile__character--achievement--number">30 <span className="profile__character--achievement--quote">%</span></p>
                            </div>
                            <div className="profile__character--achievement--item">
                                <i className="fas fa-list-ol profile__character--achievement--icon"></i>
                                <p className="profile__character--achievement--number">100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col span-4-of-8">
                <div className="profile__information">
                    <form className="form profile__form">
                        <div className="form__control">
                            <label for="" className="form__title profile__form__title">
                                Name
                            </label>
                            <input type="text" className="form__input" value="Vipmath" disabled />
                        </div>
                        <div className="form__control">
                            <label for="" className="form__title profile__form__title">
                                Email
                            </label>
                            <input type="text" className="form__input" value="vipmath171@gmail.com" disabled/>
                        </div>
                        <div className="form__control">
                            <label for="" className="form__title profile__form__title">
                                Phone Number
                            </label>
                            <input type="text" className="form__input" value="09629202" disabled />
                        </div> <input className="form__submit profile__form__submit btn" type="submit" value="EDIT PROFILE" />
                    </form>
                </div>
            </div>
        </div>
    </section>
      </div>
    )
  }
}

export default Profile;