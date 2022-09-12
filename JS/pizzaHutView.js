let url = 'https://foodworld-9475e-default-rtdb.firebaseio.com/pizzaHut/products';

try {
    const data = fetch(`${url}/product1.json`).then((response) => response.json());
    data.then((products) => {
      let placeholder = document.getElementById("list1");
      let listProduct1 = "";
      for (let product of products) {
        listProduct1 += `
              <li class="listProducts">
              <article class="fl_left" style="width: 90%;">
              <img src= '${product.image}' style="display: inline-block; width: 85px">
              <div style="display: inline-block; width:60%;"><p><strong>${product.name}</strong></p>
              <p style="color: grey;">
                ${product.description}
              </p></div>
              </article>  
              <div class="fl_right" style="width: 10%; text-align:center; margin-top:55px;">
              <p style="display: inline-block;">₦${product.price}</p>
                <button class= "orderBtn" style="display: inline-block;" onclick="displayData(${product.id})" value= "1">+</button>
              </div>
            </li>
              `;
      }
      placeholder.insertAdjacentHTML("afterbegin", listProduct1);
    });
  } catch (err) {
    console.error(err);
  }

  try {
    const data = fetch(`${url}/product2.json`).then((response) => response.json());
    data.then((products) => {
      let placeholder = document.getElementById("list2");
      let listProduct2 = "";
      for (let product of products) {
        listProduct2 += `
              <li class="listProducts">
              <article class="fl_left" style="width: 90%;">
              <img src= '${product.image}' style="display: inline-block; width: 85px">
              <div style="display: inline-block; width:60%;"><p><strong>${product.name}</strong></p>
              <p style="color: grey;">
                ${product.description}
              </p></div>
              </article>  
              <div class="fl_right" style="width: 10%; text-align:center; margin-top:55px;">
              <p style="display: inline-block;">₦${product.price}</p>
                <button class= "orderBtn" style="display: inline-block;" onclick="displayData(${product.id})" value= "1">+</button>
              </div>
            </li>
              `;
      }
      placeholder.insertAdjacentHTML("afterbegin", listProduct2);
    });
  } catch (err) {
    console.error(err);
  }
  
  try {
    const data = fetch(`${url}/product3.json`).then((response) => response.json());
    data.then((products) => {
      let placeholder = document.getElementById("list3");
      let listProduct3 = "";
      for (let product of products) {
        listProduct3 += `
              <li class="listProducts">
              <article class="fl_left" style="width: 90%;">
              <img src= '${product.image}' style="display: inline-block; width: 85px">
              <div style="display: inline-block; width:60%;"><p><strong>${product.name}</strong></p>
              <p style="color: grey;">
                ${product.description}
              </p></div>
              </article>  
              <div class="fl_right" style="width: 10%; text-align:center; margin-top:55px;">
              <p style="display: inline-block;">₦${product.price}</p>
                <button class= "orderBtn" style="display: inline-block;" onclick="displayData(${product.id})" value= "1">+</button>
              </div>
            </li>
              `;
      }
      placeholder.insertAdjacentHTML("afterbegin", listProduct3);
    });
  } catch (err) {
    console.error(err);
  }
  
  try {
    const data = fetch(`${url}/product4.json`).then((response) => response.json());
    data.then((products) => {
      let placeholder = document.getElementById("list4");
      let listProduct4 = "";
      for (let product of products) {
        listProduct4 += `
              <li class="listProducts">
              <article class="fl_left" style="width: 90%;">
              <img src= '${product.image}' style="display: inline-block; width: 85px">
              <div style="display: inline-block; width:60%;"><p><strong>${product.name}</strong></p>
              <p style="color: grey;">
                ${product.description}
              </p></div>
              </article>  
              <div class="fl_right" style="width: 10%; text-align:center; margin-top:55px;">
              <p style="display: inline-block;">₦${product.price}</p>
                <button class= "orderBtn" style="display: inline-block;" onclick="displayData(${product.id})" value= "1">+</button>
              </div>
            </li>
              `;
      }
      placeholder.insertAdjacentHTML("afterbegin", listProduct4);
    });
  } catch (err) {
    console.error(err);
  }
  
  try {
    const data = fetch(`${url}/product5.json`).then((response) => response.json());
    data.then((products) => {
      let placeholder = document.getElementById("list5");
      let listProduct5 = "";
      for (let product of products) {
        listProduct5 += `
              <li class="listProducts">
              <article class="fl_left" style="width: 90%;">
              <img src= '${product.image}' style="display: inline-block; width: 85px">
              <div style="display: inline-block; width:60%;"><p><strong>${product.name}</strong></p>
              <p style="color: grey;">
                ${product.description}
              </p></div>
              </article>  
              <div class="fl_right" style="width: 10%; text-align:center; margin-top:55px;">
              <p style="display: inline-block;">₦${product.price}</p>
                <button class= "orderBtn" style="display: inline-block;" onclick="displayData(${product.id})" value= "1">+</button>
              </div>
            </li>
              `;
      }
      placeholder.insertAdjacentHTML("afterbegin", listProduct5);
    });
  } catch (err) {
    console.error(err);
  }