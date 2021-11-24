class comNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav id="myNavbar">
            <div class="logo">
                <h1>MyResto</h1>
            </div>
            <div>
                <button id="hamburger" href="#" aria-label="navigation-menu">☰</button>
                <ul id="myList">
                    <li><a href="#/home">Home</a></li>
                    <li><a href="#/favorite">Favorite</a></li>
                    <li><a href="https://github.com/zayyid123">About Us</a></li>
                </ul>
            </div>
        </nav>
            `;
  }
}

customElements.define('component-navbar', comNav);
