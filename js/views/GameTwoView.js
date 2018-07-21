import footerTemplate from "./../templates/Footer";
import statsBarTemplate from "./../templates/StatsBar";
import AbstractView from "./AbstractView";
import {
  initialState,
  gameScreens
} from "./../data/state";

// import {
//   getRandomImage
// } from "./../data/images";

export default class GameOneView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    const {
      options
    } = gameScreens[`tinder-like`];

    return `
    <header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
      <h1 class="game__timer">30</h1>
      <div class="game__lives">
        <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
        <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
        <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      </div>
    </header>
    <div class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
        <div class = "game__option">
                   <img src=${options[0].src} alt="Option" width="705" height="455">
                     <label class="game__answer  game__answer--photo">
                     <input name="question1" type="radio" value="photo">
                   <span>Фото</span>
                 </label>
                  <label class="game__answer  game__answer--wide  game__answer--paint">
                   <input name="question1" type="radio" value="paint">
                     <span>Рисунок</span>
                   </label>
                   </div>
        </form>
        <div class="stats">
          ${statsBarTemplate(initialState)}
        </div>
        </div>
      ${footerTemplate}
      `;
  }

  bindHandlers() {
    // const game1 = getGame1(currentScreenState);
    const arrowBack = this.element.querySelector(`.header__back `);
    const form = this.element.querySelector(`.game__content `);

    const inputs = form.querySelectorAll(`input[name=question1]`);

    // form.addEventListener(`click`, this.onFormClick);
    arrowBack.addEventListener(`click`, this.onArrowBackClick);

    [...inputs].forEach((input) =>
      input.addEventListener(`change`, this.onAnswerClick)
    );
  }

  onArrowBackClick() {}

  onAnswerClick() {}
}
