const btnOpenModal = document.querySelector(".btn");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlayy");

const openModal = function () {
  modal.classList.remove("hiddenn");
  overlay.classList.remove("hiddenn");
};

const closeModal = function () {
  modal.classList.add("hiddenn");
  overlay.classList.add("hiddenn");
};

btnOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
