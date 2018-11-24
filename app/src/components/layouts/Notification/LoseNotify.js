import React from 'react'

export default function LoseNotify() {
  return (
    <div className="popup-toward notification">
            <div className="notification-lose popup-toward__content">
                    <i className="fas fa-frown notification-lose__icon"></i>
                <h1 className="notification-lose__heading heading-primary">
                    Lose<span className="notification-lose__heading--quote">@</span>
                </h1>
                <div className="notification__content">
                    <div className="notification__content--item">
                        <i className="fas fa-coins notification__content--item--i"></i>
                        <p className="notification__content--item--p">-100</p>
                    </div>
                    <div className="notification__content--item">
                            <i className="fas fa-star notification__content--item--i"></i>
                        <p className="notification__content--item--p">0</p>
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
