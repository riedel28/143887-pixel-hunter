// import renderScreen from "./utils";

// import greeting from "./Greeting";
import footerTemplate from './../templates/Footer';

import AbstractView from "./AbstractView";

export default class IntroView extends AbstractView {
  get template() {
    return `<div id="main" class="central__content">
              <div id="intro" class="intro">
                <h1 class="intro__asterisk">*</h1>
                <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
              </div>
            </div>
            ${footerTemplate}
            `;
  }

  bindHandlers() {
    const asterisk = this.element.querySelector(`.intro__asterisk`);
    asterisk.addEventListener(`click`, this.onAsteriskClick);
  }

  onAsteriskClick() {
    // renderScreen(greeting);
    // console.log(`object`);
  }
}

// import greeting from "./Greeting";

// const intro = getElementFromTemplate(
//     `<div id="main" class="central__content">
//       <div id="intro" class="intro">
//         <h1 class="intro__asterisk">*</h1>
//         <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
//       </div>
//     </div>`
// );

// const asterisk = intro.querySelector(`.intro__asterisk`);

// const handlers = [];

// const onAsteriskClick = () => {
//   removeEventHandlers(handlers, () => {
//     renderScreen(greeting());
//   });
// };

// handlers.push({target: asterisk, type: `click`, handler: onAsteriskClick});

// export default () => {
//   asterisk.addEventListener(`click`, onAsteriskClick);
//   return intro;
// };
