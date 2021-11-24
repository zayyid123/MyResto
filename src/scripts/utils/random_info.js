const randomInfo = {
  random(mydata) {
    const placeInfo = document.querySelector('.innerInfo p');
    const acak = Math.floor(Math.random() * 4) + 0;

    const allDatasInfo = mydata.lotOfInfo;
    allDatasInfo.forEach((data) => {
      if (allDatasInfo[acak].myInfo === data.myInfo) {
        placeInfo.innerHTML = `
            ${data.myInfo}
            `;
      }
    });
  },
};

export default randomInfo;
