// const btnOpenModal = document.querySelector(".btn");
// const btnCreateAccountModal = document.querySelector(".create");
// const btnCloseModal = document.querySelector(".close-modal");
// const modal = document.querySelector(".modal");
// const accountModal = document.querySelector(".reg");
// const overlay = document.querySelector(".overlayy");
// const accountOverlay = document.querySelector(".shadow-overlay");

// const openModal = () => {
//   modal.classList.remove("hiddenn");
//   overlay.classList.remove("hiddenn");
// };

// const closeModal = () => {
//   modal.classList.add("hiddenn");
//   overlay.classList.add("hiddenn");
// };

// btnOpenModal.addEventListener("click", openModal);
// btnCreateAccountModal.addEventListener("click", () => {
//   closeModal;
//   accountModal.classList.remove("hide");
//   accountOverlay.classList.remove("hide");
// });

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

