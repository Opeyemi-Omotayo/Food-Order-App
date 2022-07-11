
  try {
    const data = fetch("product.json").then((response) => response.json());
    data.then((products) => {
      console.log(products)
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
    console.log(data);


  } catch (err) {
    console.error(err);
  }
