import {
  getElementFromTemplate,
  removeEventHandlers,
  renderScreen
  // displayRandomAnswers
} from "./utils";

// import state from "./data/state";
import getNextScreen from "./Game";

import greeting from "./Greeting";
// import game3 from "./Game-3";
import header from "./Header";

const displayOptions = (currentScreenState) => {
  return currentScreenState.options.map((option) => {
    return `<div class="game__option">
            <img src=${option.src} alt="Option ${option.type}" width="705" height="455">
            <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
            <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
          </div>`;
  });
};

const stats = (currentScreenState) => {
  return `<div class="stats">
  <ul class="stats">
    ${currentScreenState.answers}
  </ul>
 </div>`;
};

const getGame2 = (currentScreenState) => {
  return getElementFromTemplate(
      `${header()}
    <div class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
        ${displayOptions(currentScreenState)}
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
  const game2 = getGame2(currentScreenState);
  const arrowBack = game2.querySelector(`.header__back`);
  const form = game2.querySelector(`.game__content`);

  const handlers = [];

  const onArrowBackClick = () => {
    removeEventHandlers(handlers, () => {
      renderScreen(greeting());
    });
  };

  const onFormClick = () => {
    const checkedInputs = game2.querySelectorAll(`input:checked`);
    if (checkedInputs.length > 0) {
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

  return game2;
};
