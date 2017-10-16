import {
  getElementFromTemplate,
  removeEventHandlers,
  renderScreen,
  displayRandomAnswers
} from "./utils";

import state from "./data/state";

import header from "./Header";
import greeting from "./Greeting";
import stats from "./Stats";

const displayOptions = state.screens[2].options.map((option) => {
  return `<div class="game__option">
          <img src=${option.src} alt="Option 1" width="304" height="455">
        </div>`;
});

const game3 = getElementFromTemplate(
    `${header()}
    <div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
        ${displayOptions}
      </form>
      <div class="stats">
        <ul class="stats">
        ${displayRandomAnswers}
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
