// UI vars
const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

let items

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

function loadItems() {
    items = getItemsFromLS();
    items.forEach(function (item) {
        createItem(item);
    })
}

// Get items from Local Storage
function getItemsFromLS() {
    if (localStorage.getItem('items') === null) {
        items = [];
    }
    else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

// Set item to Local Storage
function setItemToLS(text) {
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
}

// Delete item form LS
function deleteItemFromLS(text) {
    items = getItemsFromLS();
    items.forEach(function (item, index) {
        if (item === text) {
            items.splice(index, 1);
        }
    });

    localStorage.setItem('items', JSON.stringify(items));
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

        // Save to LS
        setItemToLS(input.value);

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

            // Delete item from LS
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
    }

    e.preventDefault();
}

// Delete All Items
function deleteAllItems(e) {

    if (confirm('Emin misiniz?')) {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }

    e.preventDefault();
}


