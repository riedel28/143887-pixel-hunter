export const images = {
  paintings: [
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    `http://i.imgur.com/1KegWPz.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};


const getRandomPhoto = () => {
  const src = images.photos[Math.floor(Math.random() * images.photos.length)];

  return {
    type: `photo`,
    src
  };
};

const getRandomPainting = () => {
  const src = images.paintings[Math.floor(Math.random() * images.paintings.length)];

  return {
    type: `paint`,
    src
  };
};

export const getRandomImage = () => {
  const randomImages = [getRandomPhoto(), getRandomPainting()];

  const randomize = (num) => {
    return Math.floor(Math.random() * num);
  };

  return randomImages[randomize(randomImages.length)];
};

// const getRandomImage = (type) => {
//   if (type === `photo`) {
//     return getRandomPhoto();
//   }

//   if (type === `painting`) {
//     return getRandomPainting();
//   }

//   return false;
// };
