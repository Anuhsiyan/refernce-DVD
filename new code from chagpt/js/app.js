// General utility functions for data persistence
function saveToLocalStorage() {
    localStorage.setItem('dvds', JSON.stringify(dvds));
    localStorage.setItem('customers', JSON.stringify(customers));
    localStorage.setItem('rentals', JSON.stringify(rentals));
}

function loadFromLocalStorage() {
    dvds = JSON.parse(localStorage.getItem('dvds')) || [];
    customers = JSON.parse(localStorage.getItem('customers')) || [];
    rentals = JSON.parse(localStorage.getItem('rentals')) || [];
}

// Load data on startup
loadFromLocalStorage();