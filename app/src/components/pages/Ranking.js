import React, { Component } from 'react'


class Ranking extends Component {
  render() {
    return (
        <section className="ranking">

        <div className="row">
            <div className="col span-1-of-8"></div>
            <div className=" col span-4-of-8">
                <div className="ranking__dashboard">
                    <h2 className="ranking__dashboard--title heading-primary">
                        Rank
                        <i className="fas fa-trophy ranking__dashboard--title--icon"></i>
                    </h2>
                    <ul className="table">
                        <li className="table__title">
                            <i className=" fas fa-crown table__title--icon"></i>
                            <i className="fas fa-users table__title--icon"></i>
                            <i className="fas fa-coins table__title--icon"></i>
                            <i className="fas fa-award table__title--icon"></i>
                        </li>
                       {/* ----------------- List Item ------------------- */}
                        <li className="table__item">
                            <h4 className="table__item--rank">
                                #1
                            </h4>
                            <a className="table__item__link" href="#">
                                <img src="img/person1.png" alt="avatar" className="table__item__link--img"/>
                                <p className="table__item__link--name">Vipmath171</p>
                            </a>
                            <div className="table__item--score">
                                1500
                            </div>
                            <div className="table__item--award">
                                Newbie
                            </div>
                        </li>
                      {/* ---------------------  List Item End ---------------------*/}
                    </ul>
                    <div className="table--change-page">
                        <i className="fas fa-angle-double-left table--change-page--icon"></i>
                        Page
                        <i className="fas fa-angle-double-right table--change-page--icon"></i>
                    </div>
                </div>
            </div>
            <div className="col span-3-of-8">
                <div className="ranking__owner">
                    <h1 className="ranking__owner--rank heading-primary">#40</h1>
                </div>
                <img src="img/pencil_warrior-3-pts.png" alt="" className="ranking__picture"/>
            </div>
            
        </div>
    </section>
    )
  }
}


export default Ranking;