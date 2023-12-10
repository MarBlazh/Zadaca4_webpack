let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slide").length;
const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

function showSlide(index) {
  // recalculate the currentSlide
  // move the carousel to the currentSlide
  currentSlide = (index + totalSlides) % totalSlides; // 1
  carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function changeSlide(direction) {
  // get the currentSlide value and add the direction to it
  // assign that to a local variable called index
  // call showSlide with index
  let index = currentSlide + direction;
  showSlide(index);
}

function init() {
  nextBtn.addEventListener("click", function () {
    changeSlide(1);
  });

  prevBtn.addEventListener("click", function () {
    changeSlide(-1);
  });
}

export { init };
