class comButtonUp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <a class="buttonUp">TOP</a>
            `;
  }
}

customElements.define('component-buttonup', comButtonUp);
