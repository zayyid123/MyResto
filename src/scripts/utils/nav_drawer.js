const drawer = {
  play() {
    const hamburgerButton = document.getElementById('hamburger');
    const myListElement = document.getElementById('myList');

    hamburgerButton.addEventListener('click', (event) => {
      myListElement.classList.toggle('open');
      event.stopPropagation();
    });
  },
};

export default drawer;
