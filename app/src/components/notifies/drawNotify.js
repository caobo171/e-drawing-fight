import React from 'react'
 export default function DrawNotify() {
  return (
    <div className="popup-toward notification">
        <div className="notification-win popup-toward__content">
                <i className="fas fa-thumbs-up notification-win__icon"></i>
            <h1 className="notification-win__heading heading-primary">
                Draw<span className="notification-win__heading--quote">!</span>
            </h1>
            <div className="notification__content">
                <div className="notification__content--item">
                    <i className="fas fa-coins notification__content--item--i"></i>
                    <p className="notification__content--item--p">+0</p>
                </div>
                <div className="notification__content--item">
                        <i className="fas fa-star notification__content--item--i"></i>
                    <p className="notification__content--item--p">3</p>
                </div>
                <div className="notification__content--item">
                        <i className="fas fa-hourglass-start notification__content--item--i"></i>
                    <p className="notification__content--item--p">30s</p>
                </div>
            </div>
        </div>
    </div>
  )
}