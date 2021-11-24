import { createLoading } from '../view/templates/template-creator';

class comLoading extends HTMLElement {
  connectedCallback() {
    this.innerHTML = createLoading();
  }
}

customElements.define('component-loading', comLoading);
