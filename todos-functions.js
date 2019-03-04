// read existing todos from the local storage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos');

    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
}
// save todos to local storage
const saveTodos = function () {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// render application todos based on filters
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
        
        return searchTextMatch && hideCompletedMatch;
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed;
    })

    document.querySelector('#todos').innerHTML = '';
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));
    
    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDom(todo));
    })
}

// remove todo based on unqie id
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id;
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
} 


// get dome elements for individual todo
const generateTodoDom = function (todo) {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');
    // setup checkbox
    checkbox.setAttribute('type', 'checkbox');
    todoEl.appendChild(checkbox);
    //setup todo text
    todoText.textContent = todo.text;
    todoEl.appendChild(todoText);
    // setup remove button
    removeButton.textContent = 'x';
    todoEl.appendChild(removeButton);
    removeButton.addEventListener('click', function(e) {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    })
    return todoEl;
}

const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    return summary;
}