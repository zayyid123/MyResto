class comResto extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="restaurant" id="restaurant">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#202020" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,234.7C384,245,480,235,576,208C672,181,768,139,864,138.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div class="innerResto">
                <div class="descriptRest">
                    <h1>Our Restaurant</h1>
                    <p>Silahkan pilih restaurant yang anda inginkan</p>
                </div>
                <component-card></component-card>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#202020" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,240C384,213,480,139,576,117.3C672,96,768,128,864,170.7C960,213,1056,267,1152,272C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div>
            `;
  }
}

customElements.define('component-resto', comResto);
