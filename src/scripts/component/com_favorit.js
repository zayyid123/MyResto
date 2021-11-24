class comFavorit extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="favorit">
            <div class="allFav">
                <div class="descriptFav">
                    <h1>My Favourite</h1>
                    <p>Halaman semua resto favoritmu</p>
                </div>
                <component-card></component-card>
            </div>
        </div>
            `;
  }
}

customElements.define('component-favorit', comFavorit);
