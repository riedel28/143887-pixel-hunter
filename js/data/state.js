import {getRandomImage} from "./images";

export const gameState = {
  time: 30,
  lives: 3,
  answers: []
};

const types = [`photo`, `painting`];

const randomize = (num) => {
  return Math.floor(Math.random() * num);
};

const getRandomType = () => {
  return randomize(1);
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

const generateScreens = () => {
  const games = [generateGame1, generateGame2, generateGame3];

  const screens = [];

  for (let i = 0; i < 10; i++) {
    screens.push(games[randomize(3)]());
  }

  return screens;
};

const generateState = () => {
  return {
    time: 30,
    lives: 0,
    answers: [],
    answersTypes: [`fast`, `correct`, `wrong`, `unknown`, `slow`],
    screens: generateScreens(),
    currentScreen: 0
  };
};

const state = generateState();

const getNextScreenData = () => {
  if (state.currentScreen >= 0 && state.currentScreen < state.screens.length) {
    return state.screens[state.currentScreen++];
  }

  return false;
};

export default getNextScreenData;
