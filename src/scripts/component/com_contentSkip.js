class comSkip extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="#" class="skip-link">Skip To Content</a>
            `;
  }
}

customElements.define('component-skip', comSkip);
