import React from 'react';

class Global extends React.Component{
    render(){
        return (<div className="popup-simple notification-challenge">
                <div className="notification-challenge__avatar">
                    <div className="notification-challenge__avatar--group">
                        <img src="https://cdn0.iconfinder.com/data/icons/superuser-web-kit/512/686909-user_people_man_human_head_person-512.png" alt="avatar" className="notification-challenge__avatar--group--img"/>
                        <p className="notification-challenge__avatar--group--name">Vipmath171</p>
                    </div>
                <p className="notification-challenge__avatar--content">is challenging you</p>

                <button className="btn-teal">
                    accept
                </button>
                <button  className="btn-blue">
                    decline
                </button>

            </div>
        </div>);
    }
}

export default Global;