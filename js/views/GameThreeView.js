import statsBarTemplate from "./../templates/StatsBar";
import footerTemplate from "./../templates/Footer";
import AbstractView from "./AbstractView";
import {
  initialState,
  gameScreens
} from "./../data/state";
import HeaderView from "./HeaderView";


const headerView = new HeaderView(initialState);
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
    } = gameScreens[`one-of-three`];
    return `
    ${headerView.template}
    <div class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src=${options[0].src} alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src=${options[1].src} alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
         <img src=${options[2].src} alt="Option 1" width="304" height="455">
        </div>
      </form>
      <div class="stats">
        ${statsBarTemplate(initialState)}
      </div>
    </div>
    ${footerTemplate}`;
  }

  bindHandlers() {
    // const game1 = getGame1(currentScreenState);
    const arrowBack = this.element.querySelector(`.header__back `);
    const form = this.element.querySelector(`.game__content `);

    const inputs = form.querySelectorAll(`.game__option`);

    // form.addEventListener(`click`, this.onFormClick);
    arrowBack.addEventListener(`click`, this.onArrowBackClick);

    [...inputs].forEach((input) =>
      input.addEventListener(`click`, this.onAnswerClick)
    );
  }

  onArrowBackClick() {}

  onAnswerClick() {}
}
