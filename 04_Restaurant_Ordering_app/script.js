const addButtons = document.querySelectorAll(".add-btn");
const orderSection = document.getElementById("order-section");
const orderItemsContainer = document.getElementById("order-items");
const totalPriceEl = document.getElementById("total-price");

const completeBtn = document.getElementById("complete-btn");

const modal = document.getElementById("payment-modal");
const form = document.querySelector("form");
const nameInput = document.getElementById("name-input");
const cardInput = document.getElementById("card-input");
const cvvInput = document.getElementById("cvv-input");

const successMessage = document.getElementById("success-message");

let cart = [];

const menu = [
  { id: 1, name: "Pizza", price: 14 },
  { id: 2, name: "Hamburger", price: 12 },
  { id: 3, name: "Beer", price: 12 }
];

addButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const id = Number(btn.dataset.id);
    const item = menu.find(m => m.id === id);

    cart.push(item);
    renderCart();

    orderSection.style.display = "block";
    successMessage.style.display = "none";
  });
});

function renderCart() {
  orderItemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.className = "order-item";

    div.innerHTML = `
      <div class="left">
        <span class="item-name">${item.name}</span>
        <button class="remove-btn" data-index="${index}">remove</button>
      </div>
      <span>$${item.price}</span>
    `;

    orderItemsContainer.appendChild(div);
  });

  totalPriceEl.textContent = `$${total}`;
}

orderItemsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;
    cart.splice(index, 1);

    renderCart();

    if (cart.length === 0) {
      orderSection.style.display = "none";
    }
  }
});

completeBtn.addEventListener("click", () => {
 modal.classList.remove("hidden");
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload AFTER validation

  const name = nameInput.value.trim();

  modal.classList.add("hidden");
  orderSection.style.display = "none";

  successMessage.style.display = "block";
  successMessage.innerHTML = `
    <p>Thanks, ${name || "Guest"}! Your order is on its way!</p>
  `;

  cart = [];
  nameInput.value = ''
  cardInput.value = ''
  cvvInput.value = ''
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});