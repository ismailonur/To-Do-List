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

    // Deletean an item
    taskList.addEventListener('click', deleteItem)

    // Delete All Items
    btnDeleteAll.addEventListener('click', deleteAllItems)
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

// Delete an item
function deleteItem(e) {

    if (confirm('Emin misiniz?')) {
        if (e.target.className === 'fas fa-times') {
            e.target.parentElement.parentElement.remove();
        }

    }

    e.preventDefault();
}

// Delete All Items
function deleteAllItems(e) {

    // taskList.innerHTML='';

    if (confirm('Emin misiniz?')) {
        taskList.childNodes.forEach(function (item) {
            if (item.nodeType === 1) {
                item.remove();
            }
        })
    }

    e.preventDefault();
}


