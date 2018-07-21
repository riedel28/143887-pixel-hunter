export default (state) => {
  const answers = state.answers.map((answer) => {
    return `<li class="stats__result stats__result--${answer}"></li>`;
  });

  return `<ul class="stats">
            ${answers}
          </ul>`;
};

// <li class="stats__result stats__result--fast"></li>
//     <li class="stats__result stats__result--slow"></li>
//     <li class="stats__result stats__result--wrong"></li>
//     <li class="stats__result stats__result--unknown"></li>
//     <li class="stats__result stats__result--fast"></li>
//     <li class="stats__result stats__result--slow"></li>
//     <li class="stats__result stats__result--wrong"></li>
//     <li class="stats__result stats__result--unknown"></li>
//     <li class="stats__result stats__result--slow"></li>
//     <li class="stats__result stats__result--fast"></li>
