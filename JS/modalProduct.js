const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlayy");
let modalProducts = "";
let updatedPrice = 0;
let counter = 0;

const closeModal = (id) => {
  modal.style.display = "none";
  overlay.style.display = "none";
};

const onAdd =(price) =>{
   updatedPrice += price ;
   counter += 1;
   document.getElementById("showPrice").innerHTML = updatedPrice;
   document.getElementById("counterNum").innerHTML = counter;
   console.log(updatedPrice)
};

const onRemove = (price) => {
  updatedPrice -= price ;
  counter -= 1;
   document.getElementById("showPrice").innerHTML = updatedPrice;
   document.getElementById("counterNum").innerHTML = counter;
   console.log(updatedPrice)
}

const displayData = (id) => {
  console.log(id);
  const data = fetch("product.json").then((response) => response.json());
  data.then((products) => {
    for (let product of products) {
      if (id === product.id) {
        
        modal.style.display = "block";
        overlay.style.display = "block";
        console.log(product.name);

        modalProducts = `
        <button class="close-modal fl_right" onclick="closeModal(${product.id})" >&times;</button>
       <section style="margin-top: 0;">
         <h3 class="modalText highlightText" style="width: 70%; "><strong>${product.name}</strong> </h3>
         <p class="modalText">${product.description}</p>
         <p class="modalText"><strong>Your Extra</strong></p>
         <p class="modalText"><strong>select your preferred drinks</strong></p>
         <p><small>minimum 0 and Maximum 10</small></p>
         <div style="line-height: 0;">
           <input type="checkbox" style="display: inline-block; "  >
           <p class="modalText" style="display: inline-block;">Coca-Cola</p>
           <p class="modalText fl_right">₦300.00</p>
         </div>
         <div style="line-height: normal;">
           <input type="checkbox" style="display: inline-block; " >
            <p class="modalText" style="display: inline-block;">Fanta</p>
           <p class="modalText fl_right">₦300.00</p>
         </div>
         <div style="line-height: 0;">
           <input type="checkbox" style="display: inline-block; " >
           <p class="modalText" style="display: inline-block;">Sprite</p>
           <p class="modalText fl_right">₦300.00</p>
         </div>
         <div >
           <input type="checkbox" style="display: inline-block; line-height: 0;" >
           <p class="modalText" style="display: inline-block;">Water</p>
           <p class="modalText fl_right">₦300.00</p>
         </div>
         <button class="modalBtn" onClick="onRemove(${product.price})" style="display: inline-block;">−</button>
         <span class="modalText" id="counterNum"></span>
          <button class="modalBtn" onClick="onAdd(${product.price})" style="display: inline-block ;">+</button>
         <button class=" btn fl_right" onclick="addToCart()"style="width: 15rem;">ADD TO CART ₦<span id="showPrice"></span></button>
       </section>`;
      }
      modal.innerHTML = modalProducts;
      overlay.addEventListener("click", closeModal);
    }
  });
};
