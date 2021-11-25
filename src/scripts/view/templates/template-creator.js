import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (data) => `
        <h1>Deskripsi Restaurant</h1>
        <div class="innerDetail">
            <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + data.pictureId}" alt="${data.name}">
            <div class="descriptDetail">
                <hr>
                <h2>${data.name}</h2>
                <hr>
                <p><b>Rating</b> : <span>${data.rating} ⭐️</span></p>
                <p><b>City</b> : <span>${data.city}</span></p>
                <p><b>Alamat</b> : <span>${data.address}</span></p>
                <p><b>Deskripsi</b> : <span>${data.description}</span></p>
                <hr>
            </div>
            <div class="menu">
                <div class="food">
                    <h3>Makanan</h3>
                    <div class="innerFood">
                    </div>
                </div>
                <div class="drink">
                    <h3>Minuman</h3>
                    <div class="innerDrink">
                    </div>
                </div>
            </div>
        </div>
`;

const myRepeatFoodAndDrink = (data, no) => `
    <p>${no}. ${data.name}</p>
`;

const myReview = (data) => `
    <div class="cardReview">
        <div class="innercard">
            <div class="account">
                <p>${data.name}</p>
            </div>
            <div class="tglReview">
                <p>${data.date}</p>
            </div>
        </div>
        <div class="reviewConsumen">
            <div>${data.review}</div>
        </div>
    </div>
`;

const myInputReview = () => `
    <div class="inputReview">
        <h3> Input Review </h3>
        <label for="myReviewName">Name :</label><br>
        <input type="text" id="myReviewName" name="myReviewName" placeholder="name" require><br><br>
        <label for="myReview">Review :</label><br>
        <textarea name="myReview" id="myReview" placeholder="your review" require></textarea><br><br>
        <button class="myReviewButton" type="submit">Submit</button>
    </div>
`;

const createRestoItemTemplate = (data) => `
    <div class="card">
    <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + data.pictureId}" alt="${data.name}" style="width:100%">
    <p class="city">City : ${data.city}</p>
    <div class="container">
        <p>Rating : ${data.rating}</p> 
        <h2><a href="#/detail/${data.id}">${data.name}</a></h2>
        <p class="cardDescript">${data.description}</p> 
        <br>
    </div>
    </div>
    <br>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg>
  </button>
`;

const createLoading = () => `
    <div class="loading">
        <p>loading gess</p>
    </div>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  myRepeatFoodAndDrink,
  myReview, myInputReview,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createLoading,
};
