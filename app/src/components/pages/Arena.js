import React, { Component } from 'react'

 class Arena extends Component {
  render() {
    return (
        <section className="arena">
        <div className="col span-2-of-8">
            <div className="arena__sidebar">
                <div className="arena__sidebar--change-page">
                    <i className="fas fa-angle-double-left arena__sidebar--change-page--icon"></i>
                    Page
                    <i className="fas fa-angle-double-right arena__sidebar--change-page--icon"></i>
                </div>
                <img className="arena__sidebar--img" src="img/pencil_warrior-2-pts.png" alt="" />
            </div>
        </div>
        <div className="col span-5-of-8 arena__place">
            <div className="card">
                <div className="card__avatar">
                    <img className="card__avatar--img" src="img/person1.png" alt="avatar" />
                </div>
                <div className="card__name">
                    Vipmath171
                </div>
                <div className="card__btn btn">
                    <div className="card__btn--icon">
                        Challenge
                    </div>
                </div>
            </div>
           </div>
        <div className="col span-1-of-8"></div>
    </section>

    )
  }
}

export default Arena;
