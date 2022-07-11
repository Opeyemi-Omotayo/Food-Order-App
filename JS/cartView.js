  const addToCart = () => {
  const cartNotification = document.querySelector(".cart");
  const modal = document.querySelector(".modal");

  let add = Number(cartNotification.getAttribute("data-count") || 0);
  cartNotification.setAttribute("data-count", add + 1);
  cartNotification.classList.add("zero");

  modal.innerHTML=`
    <section style="margin-top: 0;">
      <img src="images/check-tick-icon.jpg" style="height: 250px; width: 250px;" ></img>
      <h1>Added Successfully!</h1>
    </section>`;

};

