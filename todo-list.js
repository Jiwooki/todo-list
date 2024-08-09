document.getElementById('add-btn').addEventListener('click', function() {
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const dueDateInput = document.getElementById('due-date');

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const dueDate = dueDateInput.value;

    if (title !== '') {
        const todoList = document.getElementById('todo-list');

        const newTodoItem = document.createElement('li');

        const todoContent = document.createElement('div');
        todoContent.innerHTML = `<strong>${title}</strong><p>${description}</p><small>Due: ${dueDate}</small>`;
        newTodoItem.appendChild(todoContent);

        const actionsContainer = document.createElement('div');
        actionsContainer.classList.add('actions');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');
        editButton.addEventListener('click', function() {
            editTask(newTodoItem, title, description, dueDate);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(newTodoItem);
        });

        actionsContainer.appendChild(editButton);
        actionsContainer.appendChild(deleteButton);

        newTodoItem.appendChild(actionsContainer);
        todoList.appendChild(newTodoItem);

        titleInput.value = '';
        descriptionInput.value = '';
        dueDateInput.value = '';
    }
});

function editTask(todoItem, title, description, dueDate) {
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const dueDateInput = document.getElementById('due-date');

    titleInput.value = title;
    descriptionInput.value = description;
    dueDateInput.value = dueDate;

    document.getElementById('add-btn').textContent = 'Update Task';
    document.getElementById('add-btn').onclick = function() {
        updateTask(todoItem);
    };
}

function updateTask(todoItem) {
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const dueDateInput = document.getElementById('due-date');

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const dueDate = dueDateInput.value;

    if (title !== '') {
        todoItem.querySelector('strong').textContent = title;
        todoItem.querySelector('p').textContent = description;
        todoItem.querySelector('small').textContent = `Due: ${dueDate}`;

        document.getElementById('add-btn').textContent = 'Add Task';
        document.getElementById('add-btn').onclick = function() {
            document.getElementById('add-btn').addEventListener('click', function() {
                const titleInput = document.getElementById('title');
                const descriptionInput = document.getElementById('description');
                const dueDateInput = document.getElementById('due-date');

                const title = titleInput.value.trim();
                const description = descriptionInput.value.trim();
                const dueDate = dueDateInput.value;

                if (title !== '') {
                    const todoList = document.getElementById('todo-list');

                    const newTodoItem = document.createElement('li');

                    const todoContent = document.createElement('div');
                    todoContent.innerHTML = `<strong>${title}</strong><p>${description}</p><small>Due: ${dueDate}</small>`;
                    newTodoItem.appendChild(todoContent);

                    const actionsContainer = document.createElement('div');
                    actionsContainer.classList.add('actions');

                    const editButton = document.createElement('button');
                    editButton.textContent = 'Edit';
                    editButton.classList.add('edit-btn');
                    editButton.addEventListener('click', function() {
                        editTask(newTodoItem, title, description, dueDate);
                    });

                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.classList.add('delete-btn');
                    deleteButton.addEventListener('click', function() {
                        todoList.removeChild(newTodoItem);
                    });

                    actionsContainer.appendChild(editButton);
                    actionsContainer.appendChild(deleteButton);

                    newTodoItem.appendChild(actionsContainer);
                    todoList.appendChild(newTodoItem);

                    titleInput.value = '';
                    descriptionInput.value = '';
                    dueDateInput.value = '';
                }
            });
        };
    }
}
