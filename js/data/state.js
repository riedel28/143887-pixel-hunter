import {getRandomImage} from "./images";

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
  answersTypes: [`fast`, `correct`, `wrong`, `unknown`, `slow`],
  screens: []
};

const randomize = (num) => {
  return Math.floor(Math.random() * num + 1);
};

const generateScreens = () => {
  const games = [generateGame1, generateGame2, generateGame3];

  for (let i = 0; i < 10; i++) {
    const type = state.screens.push(games[randomize(3)]());
  }
};

generateScreens();

const types = [`photo`, `painting`];

const getRandomType = () => {
  return randomize(types.length);
};

const generateGame1 = () => {
  const randomType = getRandomType();
  return {
    checkAnswer(answer, type) {
      return (
        answer > -1 &&
        answer < this.options.length &&
        type === this.options[answer].type
      );
    },
    type: 1,
    options: [
      {
        type: types[randomType],
        src: getRandomImage(types[randomType])
      },
      {
        type: types[1 - randomType],
        src: getRandomImage(types[1 - randomType])
      }
    ]
  };
};

const generateGame2 = () => {
  const randomType = getRandomType();
  return {
    checkAnswer(type) {
      return type === this.options[0].type;
    },
    type: 2,
    options: [
      {
        type: types[randomType],
        src: getRandomImage(types[randomType])
      }
    ]
  };
};

const generateGame3 = () => {
  const randomType = getRandomType();

  const randomImage = randomize(3);

  const answers = {
    checkAnswer(answer, type) {
      return (
        answer > -1 &&
        answer < this.options.length &&
        type === this.options[answer].type
      );
    },
    type: 3,
    options: []
  };
  for (let i = 0; i < 3; i++) {
    const type = i === randomImage ? randomType : 1 - randomType;

    answers.options.push({
      type: types[type],
      src: getRandomImage(types[type])
    });
  }

  return answers;
};

export default {state, generateGame1, generateGame2, generateGame3};
