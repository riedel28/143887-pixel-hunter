const getElementFromTemplate = (markup) => {
  const element = document.createElement(`div`);
  element.innerHTML = markup;
  return element;
};

export default getElementFromTemplate;

const removeElementHandlers = () => {
  // eventListeners.map((eventListener) => {
  //   setTimeout(() => {
  //     screen.removeEventListener(`click`, onArrowClick);
  //   }, 0);
  // });
  // const a = functionsArray.map((function) => {
  //   return setTimeout(() => {
  //      screen.removeEventListener(`click`, function);
  //   }, 0);
  // });

  console.log(`ok`);
};

export {removeElementHandlers};
