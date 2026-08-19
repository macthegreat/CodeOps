
var menuItem = document.querySelector(".menu-card");
var btn1 = document.querySelector(".menu-card button");
var search = document.querySelector("#search");
var order = document.querySelector(".order-section");
var total = document.querySelector(".total");

const state = {
  dishes: [],
  cart: [],
  search: "",
};
async function loadMenu() {
  menuItem.textContent = "Loading menu";
  try {
    const res = await fetch("menu.json");
    if (!res.ok) throw new Error("HTTP " + res.status);
    state.dishes = await res.json();
    render();
  } catch {
    menuItem.textContent = "Could not load the menu.";
  }
}
function render() {
  const term = state.search.toLowerCase();
  const shown = state.dishes.filter((d) => d.name.toLowerCase().includes(term));
  menuItem.innerHTML = shown
    .map(
      (d) => `
    <article class="Menu-card" data-id="${d.id}">
    <h3>${d.name}</h3>
    <p class="price">${d.price} ETB</p>
    <button class="add">Add</button>
    </article>`,
    )
    .join("");
  renderCart();
}

search.addEventListener("input", (e) => {
state.search = e.target.value;
render(); 
});