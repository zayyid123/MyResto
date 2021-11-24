import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (data) => `
        <h1>Deskripsi Restaurant</h1>
        <div class="innerDetail">
            <img src="${CONFIG.BASE_IMAGE_URL + data.pictureId}" alt="${data.name}">
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
                <img src="../images/logo/user.png" alt="">
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
    <img src="${CONFIG.BASE_IMAGE_URL + data.pictureId}" alt="${data.name}" style="width:100%">
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
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
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
