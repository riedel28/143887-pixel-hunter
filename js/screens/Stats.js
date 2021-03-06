// import {
//   getElementFromTemplate,
//   removeEventHandlers,
//   renderScreen
//   // displayRandomAnswers
// } from "./utils";

// import greeting from "./screens/Greeting";

// const stats = getElementFromTemplate(
//     `<header class="header">
//       <div class="header__back">
//         <button class="back">
//         <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
//         <img src="img/logo_small.svg" width="101" height="44">
//       </button>
//       </div>
//     </header>
//     <div class="result">
//       <h1>Победа!</h1>
//       <table class="result__table">
//         <tr>
//           <td class="result__number">1.</td>
//           <td colspan="2">
//             <ul class="stats">

//             </ul>
//           </td>
//           <td class="result__points">×&nbsp;100</td>
//           <td class="result__total">900</td>
//         </tr>
//         <tr>
//           <td></td>
//           <td class="result__extra">Бонус за скорость:</td>
//           <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
//           <td class="result__points">×&nbsp;50</td>
//           <td class="result__total">50</td>
//         </tr>
//         <tr>
//           <td></td>
//           <td class="result__extra">Бонус за жизни:</td>
//           <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
//           <td class="result__points">×&nbsp;50</td>
//           <td class="result__total">100</td>
//         </tr>
//         <tr>
//           <td></td>
//           <td class="result__extra">Штраф за медлительность:</td>
//           <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
//           <td class="result__points">×&nbsp;50</td>
//           <td class="result__total">-100</td>
//         </tr>
//         <tr>
//           <td colspan="5" class="result__total  result__total--final">950</td>
//         </tr>
//       </table>
//       <table class="result__table">
//         <tr>
//           <td class="result__number">2.</td>
//           <td>
//             <ul class="stats">

//             </ul>
//           </td>
//           <td class="result__total"></td>
//           <td class="result__total  result__total--final">fail</td>
//         </tr>
//       </table>
//       <table class="result__table">
//         <tr>
//           <td class="result__number">3.</td>
//           <td colspan="2">
//             <ul class="stats">

//             </ul>
//           </td>
//           <td class="result__points">×&nbsp;100</td>
//           <td class="result__total">900</td>
//         </tr>
//         <tr>
//           <td></td>
//           <td class="result__extra">Бонус за жизни:</td>
//           <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
//           <td class="result__points">×&nbsp;50</td>
//           <td class="result__total">100</td>
//         </tr>
//         <tr>
//           <td colspan="5" class="result__total  result__total--final">950</td>
//         </tr>
//       </table>
//     </div>`
// );

// const arrowBack = stats.querySelector(`.header__back`);

// const handlers = [];

// const onArrowBackClick = () => {
//   removeEventHandlers(handlers, () => {
//     renderScreen(greeting());
//   });
// };

// handlers.push({
//   target: arrowBack,
//   type: `click`,
//   handler: onArrowBackClick
// });

// export default () => {
//   arrowBack.addEventListener(`click`, onArrowBackClick);
//   return stats;
// };

import {
  renderScreen
} from "./../utils";
import StatsView from "./../views/StatsView";

import introScreen from "./Intro";
import {
  gameState
} from "./../data/state";

export default () => {
  const statsScreen = new StatsView(gameState);

  statsScreen.onArrowBackClick = () => {
    renderScreen(introScreen());
  };

  return statsScreen;
};
