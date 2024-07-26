let dvds = [];
let rentals = [];

document.getElementById('add-dvd-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('dvd-title').value;
    const genre = document.getElementById('dvd-genre').value;
    const director = document.getElementById('dvd-director').value;
    const releaseDate = document.getElementById('dvd-release-date').value;
    
    dvds.push({ title, genre, director, releaseDate });
    saveDvdsToLocalStorage();
    renderDvdList();
});

document.getElementById('rental-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const customerNic = document.getElementById('rental-nic').value;
    const dvdTitle = document.getElementById('rental-dvd-title').value;
    const rentalDate = new Date().toISOString().split('T')[0];
    const dueDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    rentals.push({ customerNic, dvdTitle, rentalDate, dueDate });
    saveRentalsToLocalStorage();
    renderRentalList();
});

function renderDvdList() {
    const dvdList = document.getElementById('dvd-list');
    dvdList.innerHTML = '';
    dvds.forEach(dvd => {
        const li = document.createElement('li');
        li.textContent = `${dvd.title} - ${dvd.genre} - ${dvd.director} - ${dvd.releaseDate}`;
        dvdList.appendChild(li);
    });
}

function renderRentalList() {
    const rentalList = document.getElementById('rental-list');
    rentalList.innerHTML = '';
    rentals.forEach(rental => {
        const li = document.createElement('li');
        li.textContent = `${rental.customerNic} - ${rental.dvdTitle} - ${rental.rentalDate} - Due: ${rental.dueDate}`;
        rentalList.appendChild(li);
    });
}

function saveDvdsToLocalStorage() {
    localStorage.setItem('dvds', JSON.stringify(dvds));
}

function saveRentalsToLocalStorage() {
    localStorage.setItem('rentals', JSON.stringify(rentals));
}

function loadDvdsFromLocalStorage() {
    dvds = JSON.parse(localStorage.getItem('dvds')) || [];
}

function loadRentalsFromLocalStorage() {
    rentals = JSON.parse(localStorage.getItem('rentals')) || [];
}

// Load data on startup
loadDvdsFromLocalStorage();
loadRentalsFromLocalStorage();
renderDvdList();
renderRentalList();