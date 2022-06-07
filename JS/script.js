const btnOpenModal = document.querySelector(".btn");
const btnCreateAccountModal = document.querySelector(".create");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const accountModal = document.querySelector(".reg");
const overlay = document.querySelector(".overlayy");
const accountOverlay = document.querySelector(".shadow-overlay");

const openModal = function () {
  modal.classList.remove("hiddenn");
  overlay.classList.remove("hiddenn");
};

const closeModal = function () {
  modal.classList.add("hiddenn");
  overlay.classList.add("hiddenn");
};

btnOpenModal.addEventListener("click", openModal);
btnCreateAccountModal.addEventListener("click", ()=>{
  closeModal
  accountModal.classList.remove("hide");
  accountOverlay.classList.remove("hide");

});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
