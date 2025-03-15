// Check if the current page is the To-Do List page
if (window.location.pathname.includes('todo.html')) {
    // To-Do List functionality
    document.getElementById('todoForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const work = document.getElementById('work').value;
        const priority = document.getElementById('priority').value;
        const progress = document.getElementById('progress').value;

        // Get the table body
        const tableBody = document.querySelector('#todoTable tbody');

        // Create a new row
        const newRow = document.createElement('tr');

        // Add cells to the row
        newRow.innerHTML = `
            <td>${tableBody.children.length + 1}</td>
            <td>${work}</td>
            <td>${priority}</td>
            <td>${progress}</td>
            <td class="actions">
                <button class="edit" onclick="editTask(this)">Edit</button>
                <button class="delete" onclick="deleteTask(this)">Delete</button>
            </td>
        `;

        // Append the row to the table
        tableBody.appendChild(newRow);

        // Clear the form inputs
        document.getElementById('work').value = '';
        document.getElementById('priority').value = 'High';
        document.getElementById('progress').value = 'Not Started';
    });

    function editTask(button) {
        const row = button.closest('tr');
        const cells = row.querySelectorAll('td');

        // Get current values
        const work = cells[1].textContent;
        const priority = cells[2].textContent;
        const progress = cells[3].textContent;

        // Replace text with input fields
        cells[1].innerHTML = `<input type="text" value="${work}">`;
        cells[2].innerHTML = `
            <select>
                <option value="High" ${priority === 'High' ? 'selected' : ''}>High</option>
                <option value="Medium" ${priority === 'Medium' ? 'selected' : ''}>Medium</option>
                <option value="Low" ${priority === 'Low' ? 'selected' : ''}>Low</option>
            </select>
        `;
        cells[3].innerHTML = `
            <select>
                <option value="Not Started" ${progress === 'Not Started' ? 'selected' : ''}>Not Started</option>
                <option value="In Progress" ${progress === 'In Progress' ? 'selected' : ''}>In Progress</option>
                <option value="Completed" ${progress === 'Completed' ? 'selected' : ''}>Completed</option>
            </select>
        `;

        // Change Edit button to Save button
        cells[4].innerHTML = `
            <button class="save" onclick="saveTask(this)">Save</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        `;
    }

    function saveTask(button) {
        const row = button.closest('tr');
        const cells = row.querySelectorAll('td');

        // Get updated values
        const work = cells[1].querySelector('input').value;
        const priority = cells[2].querySelector('select').value;
        const progress = cells[3].querySelector('select').value;

        // Update the row with new values
        cells[1].textContent = work;
        cells[2].textContent = priority;
        cells[3].textContent = progress;

        // Change Save button back to Edit button
        cells[4].innerHTML = `
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        `;
    }

    function deleteTask(button) {
        const row = button.closest('tr');
        row.remove();

        // Update serial numbers
        const tableBody = document.querySelector('#todoTable tbody');
        Array.from(tableBody.children).forEach((row, index) => {
            row.querySelector('td').textContent = index + 1;
        });
    }
} else {
    // Original functionality for the first page
    function addtotable(event) {
        event.preventDefault();

        // Get input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

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
}