import statsBarTemplate from "../templates/StatsBar";
import footerTemplate from "../templates/Footer";
import AbstractView from "./AbstractView";
import {
  gameState
} from "../data/state";
import HeaderView from "./HeaderView";


const headerView = new HeaderView(gameState);
// import {
//   getRandomImage
// } from "./../data/images";

export default class GameOneView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.currentScreen = this.state.currentScreen;
    this.screen = this.state.screens[this.currentScreen];
    // this.screenType = [`one-of-two`];

    this.options = this.screen.options;
    this.task = this.screen.task;
  }

  get template() {
    console.log(this.state);
    console.log(this.screen);

    // console.log(generateGameScreens(5));
    // console.log(gameScreens[`one-of-three`]);
    // console.log(this.screens);
    // console.log(this.currentScreen);

    // const {
    //   options
    // } = this.state.screens[this.currentScreen];


    return `
    ${headerView.template}
    <div class="game">
      <p class="game__task">${this.task}</p>
      <form class="game__content  game__content--triple">
        ${this.options.map((option) => `<div class="game__option">
        <img src=${option.src} alt=${option.type} width="304" height="455">
      </div>`).join(``)}
      </form>
      <div class="stats">
        ${statsBarTemplate(gameState)}
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
