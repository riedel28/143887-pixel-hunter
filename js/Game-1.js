import {
  getElementFromTemplate,
  removeEventHandlers,
  renderScreen,
  displayRandomAnswers
} from "./utils";

import state from "./data/state";

import greeting from "./Greeting";
import game2 from "./Game-2";
import header from "./Header";

const displayOptions = state.screens[0].options.map((option) => {
  return `<div class="game__option">
          <img src=${option.src} alt="Option 1" width="468" height="458">
          <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
          <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
        </div>`;
});

const stats = `<div class="stats">
                <ul class="stats">
                ${displayRandomAnswers}
                </ul>
               </div>`;

const game1 = getElementFromTemplate(
    `${header()}
    <div class="game">
      <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
      <form class="game__content">
       ${displayOptions}
      </form>
      ${stats}
    </div>`
);

const arrowBack = game1.querySelector(`.header__back`);
const form = game1.querySelector(`.game__content`);

const handlers = [];

const onArrowBackClick = () => {
  removeEventHandlers(handlers, () => {
    renderScreen(greeting());
  });
};

const onFormClick = () => {
  const checkedInputs = game1.querySelectorAll(`input:checked`);
  if (checkedInputs.length > 1) {
    removeEventHandlers(handlers, () => {
      renderScreen(game2());
    });
  }
};

handlers.push({target: arrowBack, type: `click`, handler: onArrowBackClick});
handlers.push({target: form, type: `click`, handler: onFormClick});

export default () => {
  form.addEventListener(`click`, onFormClick);
  arrowBack.addEventListener(`click`, onArrowBackClick);
  return game1;
};
