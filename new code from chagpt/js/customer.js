let customers = [];

document.getElementById('customer-registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nic = document.getElementById('customer-nic').value;
    const name = document.getElementById('customer-name').value;
    const email = document.getElementById('customer-email').value;
    
    customers.push({ nic, name, email });
    saveCustomersToLocalStorage();
    renderCustomerList();
});

function renderCustomerList() {
    const customerList = document.getElementById('customer-list');
    customerList.innerHTML = '';
    customers.forEach(customer => {
        const li = document.createElement('li');
        li.textContent = `${customer.nic} - ${customer.name} - ${customer.email}`;
        customerList.appendChild(li);
    });
}

function saveCustomersToLocalStorage() {
    localStorage.setItem('customers', JSON.stringify(customers));
}

function loadCustomersFromLocalStorage() {
    customers = JSON.parse(localStorage.getItem('customers')) || [];
}

// Load data on startup
loadCustomersFromLocalStorage();
renderCustomerList();