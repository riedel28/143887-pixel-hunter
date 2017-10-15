import {
  getElementFromTemplate,
  removeEventHandlers,
  renderScreen
} from "./utils";

import header from "./Header";
import greeting from "./Greeting";
import stats from "./Stats";
import state from "./data/state";

// const randomValue =
//   state.answersTypes[Math.floor(Math.random() * state.answersTypes.length)];

const randomize = () => {
  return state.answersTypes[
      Math.floor(Math.random() * state.answersTypes.length)
  ];
};

const listItems = state.answers.map(() => {
  return `<li class="stats__result stats__result--${randomize()}"></li>`;
});

const game3 = getElementFromTemplate(
    `${header()}
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
        ${listItems}
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
