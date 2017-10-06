import onElementClick from "./Greeting";

const mainScreen = document.querySelector(`.central`);

const renderScreen = (screen) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screen);
  setTimeout(() => {
    screen.removeEventListener(`click`, onElementClick);
  }, 0);
};

export default renderScreen;
