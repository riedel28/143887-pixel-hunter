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
      name: `game1`,
      options: [
        {type: `photo`, src: `https://i.imgur.com/DiHM5Zb.jpg`},
        {type: `painting`, src: `https://k42.kn3.net/D2F0370D6.jpg`}
      ]
    },
    {
      name: `game2`,
      options: [
        {type: `photo`, src: `https://k42.kn3.net/D2F0370D6.jpg`},
        {type: `painting`, src: `https://k42.kn3.net/D2F0370D6.jpg`}
      ]
    },
    {
      name: `game3`,
      options: [
        {type: `photo`, src: `https://k42.kn3.net/D2F0370D6.jpg`},
        {type: `painting`, src: `https://k42.kn3.net/D2F0370D6.jpg`}
      ]
    }
  ]
};

export default state;
