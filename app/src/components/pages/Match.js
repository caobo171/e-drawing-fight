import React, { Component } from 'react';

import LoseNotify from '../layouts/Notification/LoseNotify';
import WinNotify from '../layouts/Notification/WinNotify';
import WordNotify from '../layouts/Notification/WordNotify';

class Match extends Component {
  render() {
    return (
        <div>
            <section className="match">
            <div className="board">
                <div className="board__avatar--left">
                    <div className="board__avatar--name--left">
                        Vipmath171
                    </div>
                    <img className="board__avatar--img" src="img/person2.png" alt="avatar" />
                </div>
                <div className="board__dashboard">

                </div>
            </div>

            <div className="match__score">
                1 : 0
            </div>

            <div className="match__timer">
                <i className="match__timer--clock far fa-clock"></i>
                <div className="match__timer--number">
                    15
                </div>
            </div>

            <div className="board">
                <div className="board__avatar--right">
                    <div className="board__avatar--name--right">
                        Vipmath171
                    </div>
                    <img className="board__avatar--img" src="img/person2.png" alt="avatar" />
                </div>
                <div className="board__dashboard">
                </div>
            </div>
            </section>
            <WordNotify />
        </div>
       

    )
  }
}

export default Match;