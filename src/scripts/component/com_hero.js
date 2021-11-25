class comHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
        <picture>
            <source media="(max-width: 480px)" type="image/webp" srcset="./images/heros/hero-image_1-small.webp">
            <source media="(max-width: 480px)" srcset="./images/heros/hero-image_1-small.jpg">
            <source media="(max-width: 600px)" type="image/webp" srcset="./images/heros/hero-image_1-large.webp">
            <source media="(max-width: 600px)" srcset="./images/heros/hero-image_1-large.jpg">
            <source type="image/webp" srcset="./images/heros/hero-image_1.webp">
            <img
                class="lazyload"
                src="./images/heros/hero-image_1.jpg" 
                alt="my Hero">
            </img>
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
