import React from 'react';


class Dashboard extends React.Component{
    render(){
        return(
            <section className="dashboard" id="dashboard">
            <a href="#popup-sidebar-user" className="list--btn">
                <i className="fas fa-bars list--btn--icon"></i>
            </a>
            <div className="row">
                <div className="col span-2-of-3"></div>
                <div className="col span-1-of-3">
                    <ul className="nav">
                        <li className="nav__avatar">
                            <img className="nav__avatar--img" src="img/person2.png" alt="avatar"/>
                        </li>
                        <li className="nav__link">
                            Fanpage
                        </li>
                        <li className="nav__link">
                            LogOut
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col span-1-of-2">
                    <div className="dashboard__symbol">
                        <img className="dashboard__symbol--img" src="img/pencil_warrior-4-pts.png" alt=""/>
                    </div>
                    <div className="dashboard__list">
                        <div className="dashboard__list--icon">
                            <a className="dashboard__list--icon--a" href="#popup-sidebar-friend">
                                <i className="fas fa-user-friends"></i>
                                <div className="dashboard__list--caption">
                                    friends
                                </div>
                            </a>
                        </div>
                        <div className="dashboard__list--icon">
                            <a className="dashboard__list--icon--a">
                                <i className="fas fa-edit"></i>
                                <div className="dashboard__list--caption">
                                    notes
                                </div>
                            </a>
                        </div>
                        <div className="dashboard__list--icon">
                            <a className="dashboard__list--icon--a" >
                                <i className="fas fa-address-book"></i>
                                <div className="dashboard__list--caption">
                                    profile
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col span-1-of-2">
                    <div className="dashboard__nav">
                        <a href="#" className="dashboard__card">
                            <div className="dashboard__card--icon">
                                <i className="dashboard__card--icon--i fas fa-crown"></i>
                            </div>
                            <div className="dashboard__card--title">
                                <h3 className="heading-tertiary">The Rankings</h3>
                            </div>
                        </a>
                        <a  className="dashboard__card">
                            <div className="dashboard__card--icon">
                                <i className="dashboard__card--icon--i fas fa-chess-rook"></i>
                            </div>
                            <div className="dashboard__card--title">
                                <h3 className="heading-tertiary">The Fighting Arena</h3>
                            </div>
                        </a>
                        <a className="dashboard__card">
                            <div className="dashboard__card--icon">
                                <i className="dashboard__card--icon--i fas fa-book"></i>
                            </div>
                            <div className="dashboard__card--title">
                                <h3 className="heading-tertiary">Practicing Place</h3>
                            </div>
                        </a>
                    </div>
                </div>
    
            </div>
        </section>
        )
    }
}

export default Dashboard;