import React from "react";

class Arena extends React.Component {
  render() {
    return (
      <section class="arena">
        <div class="col span-2-of-8">
          <div class="arena__sidebar">
            <div class="arena__sidebar--change-page">
              <i class="fas fa-angle-double-left arena__sidebar--change-page--icon" />
              Page
              <i class="fas fa-angle-double-right arena__sidebar--change-page--icon" />
            </div>
            <img
              class="arena__sidebar--img"
              src="img/pencil_warrior-2-pts.png"
              alt=""
            />
          </div>
        </div>
        <div class="col span-5-of-8 arena__place">
          <div class="card">
            <div class="card__avatar">
              <img
                class="card__avatar--img"
                src="img/person1.png"
                alt="avatar"
              />
            </div>
            <div class="card__name">Vipmath171</div>
            <div class="card__btn btn">
              <div class="card__btn--icon">Challenge</div>
            </div>
          </div>
          <div class="card">
            <div class="card__avatar">
              <img
                class="card__avatar--img"
                src="img/person1.png"
                alt="avatar"
              />
            </div>
            <div class="card__name">Vipmath171</div>
            <div class="card__btn btn">
              <div class="card__btn--icon">Challenge</div>
            </div>
          </div>
          <div class="card">
            <div class="card__avatar">
              <img
                class="card__avatar--img"
                src="img/person1.png"
                alt="avatar"
              />
            </div>
            <div class="card__name">Vipmath171</div>
            <div class="card__btn btn">
              <div class="card__btn--icon">Challenge</div>
            </div>
          </div>
          <div class="card">
            <div class="card__avatar">
              <img
                class="card__avatar--img"
                src="img/person1.png"
                alt="avatar"
              />
            </div>
            <div class="card__name">Vipmath171</div>
            <div class="card__btn btn">
              <div class="card__btn--icon">Challenge</div>
            </div>
          </div>
          <div class="card">
            <div class="card__avatar">
              <img
                class="card__avatar--img"
                src="img/person1.png"
                alt="avatar"
              />
            </div>
            <div class="card__name">Vipmath171</div>
            <div class="card__btn btn">
              <div class="card__btn--icon">Challenge</div>
            </div>
          </div>
          <div class="card">
            <div class="card__avatar">
              <img
                class="card__avatar--img"
                src="img/person1.png"
                alt="avatar"
              />
            </div>
            <div class="card__name">Vipmath171</div>
            <div class="card__btn btn">
              <div class="card__btn--icon">Challenge</div>
            </div>
          </div>
          <div class="card">
            <div class="card__avatar">
              <img
                class="card__avatar--img"
                src="img/person1.png"
                alt="avatar"
              />
            </div>
            <div class="card__name">Vipmath171</div>
            <div class="card__btn btn">
              <div class="card__btn--icon">Challenge</div>
            </div>
          </div>
        </div>
        <div class="col span-1-of-8" />
      </section>
    );
  }
}

export default Arena;
