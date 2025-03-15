function addtotable(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value; // Fixed ID

    // Validate inputs
    if (!name || !email || !phone) {
        alert('Please fill in all fields.');
        return;
    }

    // Get the table body
    const tableBody = document.querySelector('#dataTable tbody');

    // Create a new row
    const newRow = document.createElement('tr');

    // Add cells to the row
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
    `;

    // Append the row to the table
    tableBody.appendChild(newRow);

    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}