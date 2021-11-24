const elementButton = document.querySelector('.buttonUp');

const buttonUp = () => {
  elementButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
};

export default buttonUp;
