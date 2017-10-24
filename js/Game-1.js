import {
  getElementFromTemplate,
  removeEventHandlers,
  renderScreen
  // displayRandomAnswers
} from "./utils";

import getNextScreen from "./Game";

import greeting from "./Greeting";
import header from "./Header";

const displayOptions = (currentScreenState) => {
  return currentScreenState.options.map((option) => {
    return `<div class="game__option">
              <img src=${option.src} alt="Option ${option.type}">
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
};

const stats = (currentScreenState) => {
  return `<div class="stats">
  <ul class="stats">
    ${currentScreenState.answers}
  </ul>
 </div>`;
};

const getGame1 = (currentScreenState) => {
  return getElementFromTemplate(
      `${header()}
    <div class="game">
      <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
      <form class="game__content">
        ${displayOptions(currentScreenState)}
      </form>
      ${stats(currentScreenState)}
    </div>`
  );
};

export default (currentScreenState) => {
  const game1 = getGame1(currentScreenState);
  const arrowBack = game1.querySelector(`.header__back`);
  const form = game1.querySelector(`.game__content`);

  form.addEventListener(`click`, onFormClick);
  arrowBack.addEventListener(`click`, onArrowBackClick);

  const onFormClick = (handlers) => {
    const checkedInputs = game1.querySelectorAll(`input:checked`);

    if (checkedInputs.length > 1) {
      const answers = [];

      answers.push(checkedInputs.value);

      removeEventHandlers(handlers, () => {
        // answers.forEach((answer) => {
        //   // checkAnswer(answer, type);
        // });
        getNextScreen();
      });
    }
  };

  const onArrowBackClick = (handlers) => {
    removeEventHandlers(handlers, () => {
      renderScreen(greeting());
    });
  };

  const handlers = [];

  handlers.push({
    target: arrowBack,
    type: `click`,
    handler: onArrowBackClick(handlers)
  });
  handlers.push({
    target: form,
    type: `click`,
    handler: onFormClick(handlers)
  });
};
