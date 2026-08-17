const form = document.querySelector("#signup-form");
const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const error = document.querySelector("#error");
const count = document.querySelector("#user-count");

const PHONE_PATTERN = /^(09\d{8}|\+2519\d{8})$/;

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function updateCount() {
  const users = getUsers();
  count.textContent = users.length;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  error.textContent = "";

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  if (name.length < 2) {
    error.textContent = "Name must be at least 2 characters.";
    return;
  }

  if (!PHONE_PATTERN.test(phone)) {
    error.textContent =
      "Enter a valid Ethiopian mobile number (09... or +2519...).";
    return;
  }

  const users = getUsers();

  users.push({
    name,
    phone
  });

  localStorage.setItem("users", JSON.stringify(users));

  form.reset();

  updateCount();
});

updateCount();