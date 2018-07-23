import AbstractView from "./AbstractView";

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const emptyHeart = `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`;
    const fullHeart = `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`;

    return `<header class="header">
  <div class="header__back">
    <button class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.svg" width="101" height="44">
    </button>
  </div>
  <h1 class="game__timer">${this.state.time}</h1>
  <div class="game__lives">
    ${new Array(3 - this.state.lives).fill(emptyHeart).join(``)}
    ${new Array(this.state.lives).fill(fullHeart).join(``)}
  </div>
</header>`;
  }
}
