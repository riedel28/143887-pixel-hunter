const mainScreen = document.querySelector(`.central`);

const renderScreen = (screen) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screen);
};

export default renderScreen;
