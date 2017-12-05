import {getElementFromTemplate} from "./../utils";

export default class AbstractView {
  get template() {
    throw new Error(`You have to define template for view`);
  }

  render() {
    return getElementFromTemplate(this.template);
  }

  bindHandlers() {}

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bindHandlers();
    }

    return this._element;
  }
}
