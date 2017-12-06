// import {
//   getElementFromTemplate,
//   removeEventHandlers,
//   renderScreen
// } from "./utils";

// import rules from "./Rules";
import AbstractView from "./../AbstractView";

const content = {
  heading: `Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!`,
  description: `Правила игры просты.<br>
                Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
                Задача кажется тривиальной, но не думай, что все так просто.<br>
                Фотореализм обманчив и коварен.<br>
                Помни, главное — смотреть очень внимательно.`
};

// const greeting = getElementFromTemplate(
//     `<div class="greeting central--blur">
//       <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
//       <h1 class="greeting__asterisk">*</h1>
//       <div class="greeting__challenge">
//         <h3>${content.heading}</h3>
//         <p>${content.description}</p>
//       </div>
//       <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
//     </div>`
// );

// const arrow = greeting.querySelector(`.greeting__continue`);

export default class GreetingView extends AbstractView {
  get template() {
    return `<div class="greeting central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${content.heading}</h3>
      <p>${content.description}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`;
  }

  bindHandlers() {
    const arrow = this.element.querySelector(`.greeting__continue`);
    arrow.addEventListener(`click`, this.onArrowClick);
  }

  onArrowClick() {}
}

// const handlers = [];
// const onArrowClick = () => {
//   removeEventHandlers(handlers, () => {
//     renderScreen(rules());
//   });
// };
// handlers.push({target: arrow, type: `click`, handler: onArrowClick});

// export default () => {
//   arrow.addEventListener(`click`, onArrowClick);
//   return greeting;
// };
