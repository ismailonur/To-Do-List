// UI vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');

const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

// Call event listeners
eventListeners();

function eventListeners() {
    // Submit event
    form.addEventListener('submit', addNewItem);
}


// Add new item
function addNewItem(e) {

    if (input.value === '') {
        alert('Boş')
    }
    else {
        // Create li
        const li = document.createElement('li');
        li.className = 'list-group-item list-group-item-secondary'
        li.appendChild(document.createTextNode(input.value));

        // Create a
        const a = document.createElement('a');
        a.classList = 'delete-item float-right'
        a.setAttribute('href', '#');
        a.innerHTML = '<i class="fas fa-times"></i>'

        // Add a to li
        li.appendChild(a);

        // Add li to ul
        taskList.appendChild(li);

        // Clear Input
        input.value = '';

        console.log(li)

        e.preventDefault();
    }
}