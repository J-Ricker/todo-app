const todos = [{
    text: 'order cat food',
    completed: true
}, {
    text: 'order dog food',
    completed: false
}, {
    text: 'buy food for me',
    completed: true
}, {
    text: 'do work',
    completed: false
}, {
    text: 'exercise',
    completed: true
}];

const filters = {
    searchText: '',
    hideCompleted: false,
}

const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    filteredTodos = filteredTodos.filter(function (todo) {
        if (filters.hideCompleted) {
            return !todo.completed;
        } else {
            return true;
        }
    })

    document.querySelector('#todos').innerHTML = '';

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed;
    })
    
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todos').appendChild(summary);
    
    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todos').appendChild(p);
    })
}

renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})

document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault();
    todos.push({
        text: e.target.elements.addTodo.value,
        completed: false
    })
    renderTodos(todos, filters);
    e.target.elements.addTodo.value = '';
})

document.querySelector('#check').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
})