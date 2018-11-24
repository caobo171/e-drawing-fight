import React, { Component } from 'react';

import {connect} from 'react-redux';

class UserSidebar extends Component {

  
  render() {
    const {auth} = this.props;
    return (
      <div>
        {auth.uid?
            <div>
            <a href="#popup-sidebar-user" className="list--btn">
                    <i className="fas fa-bars list--btn--icon"></i>
            </a>       
            
            <div className="popup-sidebar" id="popup-sidebar-user">
                <ul className="popup-sidebar__content list">
                        <a href="#" className="popup-sidebar__close">&times;</a>
                    <li className="list__item">
                        <img src="img/person1.png" alt="avatar" className="list__item--avatar" />
                        <p className="list__item--name">vipmath171</p>
                        <a href="#" className="list__item--btn">add friend</a>
                    </li>        
                    <li className="list__item">
                        <img src="img/person1.png" alt="avatar" className="list__item--avatar" />
                        <p className="list__item--name">vipmath171</p>
                        <a href="#" className="list__item--btn">add friend</a>
                    </li>        
                    <li className="list__item">
                        <img src="img/person1.png" alt="avatar" className="list__item--avatar" />
                        <p className="list__item--name">vipmath171</p>
                        <a href="#" className="list__item--btn">add friend</a>
                    </li>                 
                </ul>
            </div>
            </div> : ""
        }
      </div>
    )
  }
}

const mapStatesToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default  connect(mapStatesToProps)(UserSidebar);