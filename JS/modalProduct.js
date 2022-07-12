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
   counter ++;
   document.getElementById("showPrice").innerHTML = updatedPrice;
   document.getElementById("counterNum").innerHTML = counter;
};

const onRemove = (price) => {
  updatedPrice -= price ;
  counter --;
   document.getElementById("showPrice").innerHTML = updatedPrice;
   document.getElementById("counterNum").innerHTML = counter;
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
         <span class="modalText" id="counterNum">${this.counter ? 0: counter}</span>
          <button class="modalBtn" onClick="onAdd(${product.price})" style="display: inline-block ;">+</button>
         <button class=" btn fl_right" onclick="addToCart(${product.id})"style="width: 15rem;">ADD TO CART ₦<span id="showPrice"></span></button>
       </section>`;
      }
      modal.innerHTML = modalProducts;
      overlay.addEventListener("click", closeModal);
    }
  });
};


const addToCart = (id) => {
  const cartNotification = document.querySelector(".cart");
  const modal = document.querySelector(".modal");
  const cartModal = document.getElementById("cartModal");
  const overlay = document.querySelector(".overlayy");

  let add = Number(cartNotification.getAttribute("data-count") || 0);
  cartNotification.setAttribute("data-count", add + 1);
  cartNotification.classList.add("zero");

  modal.style.display = "none";
  overlay.style.display = "none";
  modal.innerHTML ="";  

  const data = fetch("product.json").then((response) => response.json());
  data.then((products) => {
    for (let product of products) {
      if (id === product.id) {
        cartNotification.onclick = () => {
          cartModal.style.display = "block";
          overlay.style.display = "block";
          
          cartModal.innerHTML += ` 
        <li class="listProducts" style="height:100px;" >
        <button class="close-modal fl_right" style="margin-top:53px;" >&times;</button>
        <article class="fl_left" style="width: 70%; height: 30px;">
        <img src= '${product.image}' style="width:70px;" class="fl_left">
        <p style="padding-right:20px;"><strong>${product.name}</strong></p>
        </article>  
        <div class="fl_right" style="width: 15%; text-align:center; background-colour:#f36506; padding-right:30px;">
        <p >₦${product.price}</p>
        <p>${this.counter = counter} Qty</p>
        </div> 
      </li>
      <button class="btn fl_right" onclick="sendCart()">Checkout</button>
      `;
        };
        
      }
    }
  });
};
   
const sendCart =() =>{
  fetch("https://foodworld-9475e-default-rtdb.firebaseio.com/orders.json", {
    method: "POST",
    body: JSON.stringify({
      name: 'product',
      quantity: '2'
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = "Failed to submit order!";
          throw new Error(errorMessage);
        });
      }
    })
    .catch((err) => {
      alert(err.message);
    });
}
