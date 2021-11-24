class comDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="detail"></div>
    <div class="review">
      <h2>Review</h2>
      <div class="containerRev">
        <div class="innerReview">
          
        </div>
      </div>
    </div>
    <div id="likeButtonContainer"></div>
            `;
  }
}

customElements.define('component-detail', comDetail);
