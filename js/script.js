let loginFormEl = document.querySelector(".login-form");
let loginBtnEl = document.querySelector("#login-btn");

loginBtnEl.addEventListener("click", display = () => {
  if (loginFormEl.style.display === "none") {
    loginFormEl.style.display = "block";
    menu.classList.remove("active")
    barsBtn.classList.remove("active")
    timesBtn.classList.remove("active")
  } else {
    loginFormEl.style.display = "none";
  }
}
)
display();

//////////////////Swiper///////////////////////////////////

// let swiper = new Swiper(".slide-content", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   slidesPerGroup: 3,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

////////////////////////Nav Bar///////////////////////////////

const menu = document.querySelector(".menu");
const barsBtn = document.querySelector(".fa-bars");
const timesBtn = document.querySelector(".fa-times");
const cartBtn = document.querySelector(".fa-shopping-cart");
const userBtn = document.querySelector(".fa-user");

barsBtn.addEventListener("click", displayNav = () => {
  barsBtn.classList.add("active")
  timesBtn.classList.add("active")
  menu.classList.add("active")
  loginFormEl.style.display = "none";
})

timesBtn.addEventListener("click", hideNav = () => {
  barsBtn.classList.remove("active")
  timesBtn.classList.remove("active")
  menu.classList.remove("active")

})
displayNav();
hideNav();


/////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function (foodSwiper, accessoriesSwiper) {
  // Initialize Swiper for the "services" section
  foodSwiper = new Swiper('.food', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.food .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.food .swiper-button-next',
      prevEl: '.food .swiper-button-prev',
    },
    // Add more Swiper instances for other sections as needed
  });
  accessoriesSwiper = new Swiper('.accessories', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.accessories .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.accessories .swiper-button-next',
      prevEl: '.accessories .swiper-button-prev',
    },
    // Add more Swiper instances for other sections as needed
  });
});


/*
let mySwiper = new Swiper(".food .card-slider", {
  direction: "vertical",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
}
)
*/