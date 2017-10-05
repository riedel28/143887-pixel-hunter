const mainScreen = document.querySelector(`.central`);

const renderScreen = (screen) => {
  mainScreen.innerHTML = screen;
};

export default renderScreen;
