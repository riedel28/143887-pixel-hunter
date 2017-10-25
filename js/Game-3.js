import {
  getElementFromTemplate,
  removeEventHandlers,
  renderScreen
  // displayRandomAnswers
} from "./utils";

// import state from "./data/state";
import getNextScreen from "./Game";

import header from "./Header";
import greeting from "./Greeting";
import stats from "./Stats";

const displayOptions = (currentScreenState) => {
  return currentScreenState.options.map((option) => {
    return `<div class="game__option">
            <img src=${option.src} alt="Option ${option.type}" width="304" height="455">
          </div>`;
  });
};

const getGame3 = (currentScreenState) => {
  return getElementFromTemplate(
      `${header()}
    <div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
      ${displayOptions(currentScreenState).join(``)}
      </form>
      <div class="stats">
        <ul class="stats">
        ${stats(currentScreenState)}
        </ul>
      </div>
    </div>`
  );
};

export default (currentScreenState) => {
  const game3 = getGame3(currentScreenState);
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
    if (options.length > 2) {
      removeEventHandlers(handlers, () => {
        getNextScreen();
      });
    }
  };

  arrowBack.addEventListener(`click`, onArrowBackClick);
  form.addEventListener(`click`, onFormClick);

  handlers.push({
    target: arrowBack,
    type: `click`,
    handler: onArrowBackClick
  });
  handlers.push({target: form, type: `click`, handler: onFormClick});

  return game3;
};
