import {
  getElementFromTemplate,
  removeEventHandlers,
  renderScreen
} from "./utils";

import greeting from "./Greeting";
import stats from "./Stats";

const game3 = getElementFromTemplate(
    `<header class="header">
      <div class="header__back">
        <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
      </div>
      <h1 class="game__timer">NN</h1>
      <div class="game__lives">
        <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
        <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
        <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      </div>
    </header>
    <div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
      </form>
      <div class="stats">
        <ul class="stats">
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--correct"></li>
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--unknown"></li>
        </ul>
      </div>
    </div>`
);

const arrowBack = game3.querySelector(`.header__back`);
const form = game3.querySelector(`.game__content`);

const handlers = [];
const onArrowBackClick = () => {
  removeEventHandlers(handlers, () => {
    renderScreen(greeting());
  });
};

const onFormClick = () => {
  const options = game3.querySelectorAll(`.game__option`);
  if (options.length > 0) {
    removeEventHandlers(handlers, () => {
      renderScreen(stats());
    });
  }
};

handlers.push({target: arrowBack, type: `click`, handler: onArrowBackClick});
handlers.push({target: form, type: `click`, handler: onFormClick});

export default () => {
  arrowBack.addEventListener(`click`, onArrowBackClick);
  form.addEventListener(`click`, onFormClick);
  return game3;
};
