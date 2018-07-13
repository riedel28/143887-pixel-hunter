import footerTemplate from "./../templates/Footer";
import AbstractView from "./AbstractView";

import {getRandomPhoto, getRandomPainting} from "./../data/images";

export default class GameOneView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
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
      <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
      <form class="game__content">
        <div class="game__option">
          <img src=${getRandomPhoto()} alt="Option 1" width="480" height="450">
          <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option">
          <img src=${getRandomPainting()} alt="Option 1" width="480" height="450">
          <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
          </label>
        </div>
      </form>
      <div class="stats">
        <ul class="stats">

        </ul>
      </div>
    </div>
    ${footerTemplate}
    `;
  }

  bindHandlers() {
    // const game1 = getGame1(currentScreenState);
    const arrowBack = this.element.querySelector(`.header__back`);
    const form = this.element.querySelector(`.game__content`);
    const inputs = this.element.querySelector(`input`);

    form.addEventListener(`click`, this.onFormClick);
    arrowBack.addEventListener(`click`, this.onArrowBackClick);

    Array.from(inputs).map((input) =>
      input.addEventListener(`change`, this.onAnswerClick)
    );
  }

  onArrowBackClick() {}

  onAnswerClick() {}
}
