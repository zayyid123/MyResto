class comInfo extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <svg class="mySvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c4c4c4" fill-opacity="1" d="M0,128L1440,64L1440,320L0,320Z"></path></svg>
            <div class="info">
                <h1>Sekilas Info</h1>
                <div class="innerInfo">
                    <div class="myLottie"></div>
                    <div>
                        <h2>INFO</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio corrupti aperiam adipisci odio soluta? Unde distinctio qui accusamus mollitia beatae quaerat accusantium earum numquam! Nobis architecto eveniet voluptas debitis labore.</p>
                    </div>
                </div>
            </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c4c4c4" fill-opacity="1" d="M0,64L1440,128L1440,0L0,0Z"></path></svg>
            `;
  }
}

customElements.define('component-info', comInfo);
