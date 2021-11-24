class comHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <picture>
                <img src="./images/heros/hero-image_1.jpg" alt="my resto">
            </picture>
            <div class="heroTxt">
                <h1>MyResto</h1>
                <p>Find your Restaurant</p>
                <a class="myBtn" href="#restaurant">Find Now</a>
            </div>
        </div>
            `;
  }
}

customElements.define('component-hero', comHero);
