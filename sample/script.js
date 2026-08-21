// 1. Global State
let menuItems = [];
let cart = [
    { id: 4, name: 'Tibs', price: 280, quantity: 1 },
    { id: 5, name: 'Injera Firfir', price: 100, quantity: 1 },
    { id: 10, name: 'Derek Tibs', price: 310, quantity: 1 }
];

// 2. DOM Selection
const menuGrid = document.querySelector('.menu-grid');
const orderSection = document.querySelector('.order-section');
const searchInput = document.getElementById('search');

// Modal Elements
const modal = document.getElementById('checkout-modal');
const closeModalBtn = document.querySelector('.close-modal');
const checkoutForm = document.getElementById('checkout-form');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phone-error');
const modalTotal = document.getElementById('modal-total');

// 3. Fetch Menu
async function fetchMenu() {
    try {
        const response = await fetch('./menu.json');
        if (!response.ok) throw new Error('Failed to load menu data');
        
        menuItems = await response.json();
        renderMenu(menuItems);
    } catch (error) {
        console.error('Error fetching menu:', error);
        menuGrid.innerHTML = '<p style="grid-column: 1 / -1; color: red;">Failed to load menu.</p>';
    }
}

// 4. Render Menu
function renderMenu(dishes) {
    menuGrid.innerHTML = '';

    if (dishes.length === 0) {
        menuGrid.innerHTML = '<p style="grid-column: 1 / -1; color: #666;">No dishes found matching your search.</p>';
        return;
    }

    dishes.forEach(dish => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        const spicyText = dish.spicy ? 'Spicy' : '';

        card.innerHTML = `
            <h3>${dish.name}</h3>
            <p style="color: #666; font-size: 13px;">${dish.category}</p>
            <span class="spicy">${spicyText}</span>
            <strong>${dish.price} ETB</strong>
            <button onclick="addToOrder(${dish.id})">Add to Order</button>
        `;
        menuGrid.appendChild(card);
    });
}

// 5. Render Cart
function renderCart() {
    let cartHTML = '<h2>Your Order</h2>';

    if (cart.length === 0) {
        cartHTML += '<p style="color: #666; margin-top: 15px;">Your order is empty.</p>';
        cartHTML += `
            <div class="total">
                <span>Total:</span>
                <strong>0 ETB</strong>
            </div>
            <button class="checkout-btn" disabled style="opacity: 0.5; cursor: not-allowed;">Proceed to Checkout</button>
        `;
        orderSection.innerHTML = cartHTML;
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartHTML += `
            <div class="order-item">
                <span>${item.name} (x${item.quantity})</span>
                <strong>${itemTotal} ETB</strong>
                <button class="remove" onclick="removeFromOrder(${item.id})">&times;</button>
            </div>
        `;
    });

    cartHTML += `
        <div class="total">
            <span>Total:</span>
            <strong>${total} ETB</strong>
        </div>
        <button id="checkout-btn" class="checkout-btn" onclick="openCheckoutModal(${total})">Proceed to Checkout</button>
    `;

    orderSection.innerHTML = cartHTML;
}

// 6. Cart Manipulations
function addToOrder(dishId) {
    const existingItem = cart.find(item => item.id === dishId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        const dishObj = menuItems.find(item => item.id === dishId);
        if (dishObj) {
            cart.push({ id: dishObj.id, name: dishObj.name, price: dishObj.price, quantity: 1 });
        }
    }
    renderCart();
}

function removeFromOrder(dishId) {
    const itemIndex = cart.findIndex(item => item.id === dishId);

    if (itemIndex > -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
    }
    renderCart();
}

// 7. Phone Number Validation Logic
function validateEthioPhone(phoneNumber) {
  
    const ethioPhoneRegex = /^(\+251|0)[79]\d{8}$/;
    
    // Remove all whitespace or spaces typed by user
    const cleanedNumber = phoneNumber.replace(/\s+/g, '');
    
    return ethioPhoneRegex.test(cleanedNumber);
}

// 8. Modal & Checkout Handlers
function openCheckoutModal(totalPrice) {
    modalTotal.textContent = `${totalPrice} ETB`;
    modal.style.display = 'flex'; // Display modal overlay
}

function closeModal() {
    modal.style.display = 'none';
    phoneInput.value = '';
    phoneInput.classList.remove('invalid');
    phoneError.textContent = '';
}

// Close modal when clicking 'X' or outside the modal content
closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Form Submission & Payment Processing
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    
    const inputVal = phoneInput.value.trim();

    // Validate phone number
    if (!validateEthioPhone(inputVal)) {
        phoneInput.classList.add('invalid');
        phoneError.textContent = 'Please enter a valid Ethiopian phone number (e.g., 0919385189 or 0712345678).';
        return;
    }

    // Clear errors if valid
    phoneInput.classList.remove('invalid');
    phoneError.textContent = '';

    // Successful validation!
    alert(`Payment request sent to ${inputVal} via Telebirr! Check your phone to complete payment.`);
    
    // Empty the cart and close modal
    cart = [];
    renderCart();
    closeModal();
});

// Search Filter Event
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const filteredDishes = menuItems.filter(dish => 
        dish.name.toLowerCase().includes(query) || 
        dish.category.toLowerCase().includes(query)
    );
    renderMenu(filteredDishes);
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    fetchMenu();
    renderCart();
});