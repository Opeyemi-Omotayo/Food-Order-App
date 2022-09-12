const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlayy");

const modalLogin = () => {
  modal.style.position = "fixed";
  modal.style.display = "block";
  overlay.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
  overlay.style.display = "none"; 
};

overlay.addEventListener("click", closeModal);

const modalSignup = () => {
  modal.style.height = "630px";
  modal.style.position = "fixed";
  modal.innerHTML = `
  <button class="close-modal" onclick="closeModal()">&times;</button>
  <form action="" class="formContainer" id="myform">
    <div class="modalText" style="font-size: 20px ;"><strong>CREATE AN ACCOUNT</strong></div>
    <p style="margin-left:7px">Please enter the following information to create your account</p>
    <div class="modalText">
      <label>First Name</label>
      <input class="login" type="text" id="firstName" />
    </div>
    <div class="modalText">
      <label>Last Name</label>
      <input class="login" type="text" id="lastName" />
    </div>

    <div class="modalText">
      <label>Email Address</label>
      <input class="login" type="email" id="email"/>
    </div>
    <div class="modalText">
      <label>Phone Number</label>
      <input class="login" type="number" id="number"/>
    </div>
    <div class="modalText">
      <label>Gender</label>
      <select style="margin-left: 12px; height:35px ; width:53%; border: 1px solid;" name="gender" id="gender">
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="none">Prefer not to say</option>
      </select>
    </div>
    <div class="modalText">
      <label>Set Password</label>
      <input class="login" type="password" id="password" />
    </div>
    <button class="btn centerBtn" onclick="newAccount()">Create account</button>
  </form>`;
};

const newAccount = () => {
  modal.style.height = "150px";
  modal.innerHTML = `
  <button class="close-modal" onclick="closeModal()">&times;</button>
  <div>
  <i class="fa fa-check-square-o" aria-hidden=true></i>
  <h1 class="modalText">Account created successfully!</h1>
  </div>`
  
}

const myForm = document.getElementById("myform");

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('immmmm');

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const number = document.getElementById("number");
  const gender = document.getElementById("gender");
  const password = document.getElementById("password");


  fetch("https://foodworld-9475e-default-rtdb.firebaseio.com/newAccounts.json", {
    method: "POST",
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      number,
      gender,
      password
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then( (res) => {
        console.log("success!");
        return res.json();
    })
    .then((data) => {
      console.log(data);
  })
    .catch((err) => {
      alert(err.message);
    });
});

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

