let todoList = [];
let itemCounter = 1;

function addItem() {
    const listType = document.getElementById('listType').value;
    const itemName = document.getElementById('itemName').value;
    const quantity = document.getElementById('quantity').value;

    if (itemName.trim() === "") {
        alert("Por favor, digite um item.");
        return;
    }

    const item = { itemName, quantity, completed: false };

    todoList.push(item);

    displayList();
    adjustContainerHeight();

    document.getElementById('itemName').value = "";
    document.getElementById('quantity').value = "";
}

function displayList() {
    const listContainer = document.getElementById('todoList');
    listContainer.innerHTML = "";

    todoList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');

        const itemName = document.createElement('span');
        itemName.textContent = `${itemCounter}. ${item.itemName}`;
        itemName.style.textDecoration = item.completed ? 'line-through' : 'none';
        listItem.appendChild(itemName);

        if (item.quantity) {
            const quantity = document.createElement('span');
            quantity.textContent = `Qtd: ${item.quantity}`;
            listItem.appendChild(quantity);
        }

        const completeBtn = document.createElement('button');
        completeBtn.textContent = item.completed ? 'Desfazer' : 'Concluir';
        completeBtn.onclick = () => toggleComplete(index);
        listItem.appendChild(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.onclick = () => deleteItem(index);
        listItem.appendChild(deleteBtn);

        listContainer.appendChild(listItem);

        itemCounter++;
    });

    itemCounter = 1; 
}

function toggleComplete(index) {
    todoList[index].completed = !todoList[index].completed;
    displayList();
}

function deleteItem(index) {
    todoList.splice(index, 1);
    displayList();
    adjustContainerHeight(); // Chama a função após excluir um item
}

function adjustContainerHeight() {
    const container = document.getElementById('blur-background');
    const listItemHeight = 70; 
    const additionalHeight = 250; 
    const newHeight = Math.max(todoList.length * listItemHeight + additionalHeight, 100);

    container.style.height = `${newHeight}px`;
}

document.getElementById('listType').addEventListener('change', function() {
    const quantitySection = document.getElementById('quantitySection');
    if (this.value === 'shopping') {
        quantitySection.style.display = 'block';
    } else {
        quantitySection.style.display = 'none';
    }
});

document.getElementById('quantity').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

document.getElementById('itemName').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});
