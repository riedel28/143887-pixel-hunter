const state = {
  time: 10,
  lives: 3,
  answers: [
    {succes: true, time: 10},
    {succes: true, time: 20},
    {succes: true, time: 30},
    {succes: true, time: 30},
    {succes: true, time: 30},
    {succes: true, time: 30},
    {succes: true, time: 30},
    {succes: true, time: 30},
    {succes: true, time: 30},
    {succes: true, time: 30}
  ],
  answersTypes: [`fast`, `correct`, `wrong`, `unknown`, `slow`]
};

export default state;

const randomValue =
  state.answersTypes[Math.floor(Math.random() * state.answersTypes.length)];

const listItem = state.answers.map((answer) => {
  return `<li class="stats__result stats__result--${randomValue}"></li>`;
});
