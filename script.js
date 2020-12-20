// UI vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
const items = ['item 1', 'item 2', 'item 3'];

// Load Items
loadItems();

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

function loadItems(){
    items.forEach(function(item){
        createItem(item);
    })
}

function createItem(item) {
    // Create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary'
    li.appendChild(document.createTextNode(item));

    // Create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right'
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>'

    // Add a to li
    li.appendChild(a);

    // Add li to ul
    taskList.appendChild(li);
}

// Add new item
function addNewItem(e) {

    if (input.value === '') {
        alert('Boş')
    }
    else {

        // Create Item
        createItem(input.value);

        // Clear Input
        input.value = '';

        e.preventDefault();
    }
}

// Delete an item
function deleteItem(e) {

    if (e.target.className === 'fas fa-times') {
        if (confirm('Emin misiniz?')) {
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


