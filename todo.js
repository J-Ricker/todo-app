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
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
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

