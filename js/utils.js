const getElementFromTemplate = (markup) => {
  const element = document.createElement(`div`);
  element.innerHTML = markup;
  return element;
};

export default getElementFromTemplate;

const removeElementHandlers = () => {
  setTimeout(() => {
    screen.removeEventListener(`click`, onArrowClick);
  }, 0);
};

export removeElementHandlers;