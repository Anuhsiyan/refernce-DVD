document.getElementById('generate-inventory-report').addEventListener('click', function () {
    const reportOutput = document.getElementById('report-output');
    reportOutput.innerHTML = 'Inventory Report:<br>';
    dvds.forEach(dvd => {
        reportOutput.innerHTML += `${dvd.title} - ${dvd.genre} - ${dvd.director} - ${dvd.releaseDate}<br>`;
    });
});

document.getElementById('generate-rental-report').addEventListener('click', function () {
    const reportOutput = document.getElementById('report-output');
    reportOutput.innerHTML = `Rental Report:`;
    rentals.forEach(rental => {
        reportOutput.innerHTML += `Customer NIC: ${rental.customerNic} - DVD Title: ${rental.dvdTitle} - Rented On: ${rental.rentalDate} - Due Date: ${rental.dueDate}<br>`;
    });
});

document.getElementById('generate-customer-report').addEventListener('click', function () {
    const reportOutput = document.getElementById('report-output');
    reportOutput.innerHTML = 'Customer Report:<br>';
    customers.forEach(customer => {
        reportOutput.innerHTML +=` NIC: ${customer.nic} - Name: ${customer.name} - Email: ${customer.email}<br>`;
    });
});