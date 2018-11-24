import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import FriendSidebar from '../layouts/Sidebar/FriendSidebar';

class DashBoard extends Component {
  render() {
    return (
      <div>
        <section className="dashboard" id="dashboard">
            {/* */}
            <div className="row">
                <div className="col span-1-of-2">
                    <div className="dashboard__symbol">
                        <img className="dashboard__symbol--img" src="img/pencil_warrior-4-pts.png" alt="" />
                    </div>
                    <div  className="dashboard__list">
                        <a href="#popup-sidebar-friend" className="dashboard__list--icon">
                            <div className="dashboard__list--icon--a" >
                                <i className="fas fa-user-friends"></i>
                                <div className="dashboard__list--caption">
                                    friends
                                </div>
                            </div>
                        </a>
                        <Link to="" className="dashboard__list--icon">
                            <div className="dashboard__list--icon--a" >
                                <i className="fas fa-edit"></i>
                                <div className="dashboard__list--caption">
                                    notes
                                </div>
                            </div>
                        </Link>
                        <Link  to="/profile" className="dashboard__list--icon">
                            <div className="dashboard__list--icon--a">
                                <i className="fas fa-address-book"></i>
                                <div className="dashboard__list--caption">
                                    profile
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col span-1-of-2">
                    <div className="dashboard__nav">
                        <Link to="/ranking" className="dashboard__card">
                            <div className="dashboard__card--icon">
                                <i className="dashboard__card--icon--i fas fa-crown"></i>
                            </div>
                            <div className="dashboard__card--title">
                                <h3 className="heading-tertiary">The Rankings</h3>
                            </div>
                        </Link>
                        <Link to="/arena" className="dashboard__card">
                            <div className="dashboard__card--icon">
                                <i className="dashboard__card--icon--i fas fa-chess-rook"></i>
                            </div>
                            <div className="dashboard__card--title">
                                <h3 className="heading-tertiary">The Fighting Arena</h3>
                            </div>
                        </Link>
                        <Link to="" className="dashboard__card">
                            <div className="dashboard__card--icon">
                                <i className="dashboard__card--icon--i fas fa-book"></i>
                            </div>
                            <div className="dashboard__card--title">
                                <h3 className="heading-tertiary">Practicing Place</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <FriendSidebar />
      </div>
       
    )
  }
}

export default DashBoard;
