import React from "react";
export default function WordNotify() {
  return (
    <div className="popup-top notification">
      <div className="notification-word popup-top__content">
        <div className="notification-word__content">
          <p className="notification-word__content--note">Draw 1/5 Words</p>
          <h1 className="heading-primary notification-word__content--word">
            Dog
          </h1>
          <p className="notification-word__content--warning">
            Under 15s and continue in
            <span className="notification-word__content--warning--count-down">
              {" "}
              5{" "}
            </span>{" "}
            s
          </p>
        </div>
      </div>
    </div>
  );
}
