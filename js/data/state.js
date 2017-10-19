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
  screens: [
    {
      name: `game1`
      // options: [
      //   {
      //     type: `photo`,
      //     src: `http://lorempixel.com/468/458/animals`
      //   },
      //   {
      //     type: `painting`,
      //     src: `http://lorempixel.com/468/458/animals`
      //   }
      // ],
    },
    {
      name: `game2`,
      options: [
        {
          type: `photo`,
          src: `http://lorempixel.com/705/455/animals`,
          width: 705,
          height: 455
        }
      ]
    },
    {
      name: `game3`,
      options: [
        {
          type: `photo`,
          src: `http://lorempixel.com/304/455/animals`,
          width: 304,
          height: 455
        },
        {
          type: `photo`,
          src: `http://lorempixel.com/304/455/animals`,
          width: 304,
          height: 455
        },
        {
          type: `photo`,
          src: `http://lorempixel.com/304/455/animals`,
          width: 304,
          height: 455
        }
      ]
    }
  ]
};

const types = [`photo`, `painting`];

const getRandomType = () => {
  return Math.floor(Math.random() * types.length - 1);
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
  return {
    checkAnswer(answer, type) {
      return (
        answer > -1 &&
        answer < this.options.length &&
        type === this.options[answer].type
      );
    },
    options: [
      {
        type: types[randomType],
        src: getRandomImage(types[randomType])
      },
      {
        type: types[1 - randomType],
        src: getRandomImage(types[2 - randomType])
      },
      {
        type: types[2 - randomType],
        src: getRandomImage(types[2 - randomType])
      }
    ]
  };
};

export default {state, generateGame1, generateGame2, generateGame3};
