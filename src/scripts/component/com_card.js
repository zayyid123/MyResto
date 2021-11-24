class comCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="allRestaurant"></div>
            `;
  }
}

customElements.define('component-card', comCard);
