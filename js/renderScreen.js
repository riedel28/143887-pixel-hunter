const mainScreen = document.querySelector(`.central`);

const renderScreen = (screen) => {
  mainScreen.appendChild(screen);
};

export default renderScreen;
