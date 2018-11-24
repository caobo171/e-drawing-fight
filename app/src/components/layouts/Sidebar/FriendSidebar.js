import React, { Component } from 'react';
import {connect} from 'react-redux';

class FriendSidebar extends Component {
  render() {
    
    const {auth} =this.props;
    return (
        <div>
          {
            auth.uid ? 
            <div className="popup-sidebar" id="popup-sidebar-friend">
                <ul className="popup-sidebar__content list">
                        <a href="#dashboard" className="popup-sidebar__close">&times;</a>
                    <li className="list__item">
                        <img src="img/person1.png" alt="avatar" className="list__item--avatar" />
                        <p className="list--item--name">vipmath171</p>
                        <a href="#" className="list__item--btn">CHagllenge</a>
                    </li>        
                
                    <li className="list__item">
                        <img src="img/person1.png" alt="avatar" className="list__item--avatar" />
                        <p className="list--item--name">vipmath171</p>
                        <a href="#" className="list__item--btn">CHagllenge</a>
                    </li>        
                
                    <li className="list__item">
                        <img src="img/person1.png" alt="avatar" className="list__item--avatar" />
                        <p className="list--item--name">vipmath171</p>
                        <a href="#" className="list__item--btn">CHagllenge</a>
                    </li>        
                
                    <li className="list__item">
                        <img src="img/person1.png" alt="avatar" className="list__item--avatar" />
                        <p className="list--item--name">vipmath171</p>
                        <a href="#" className="list__item--btn">CHagllenge</a>
                    </li>                
                </ul>
            </div> : ""
          }
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(FriendSidebar)  ;