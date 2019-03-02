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

// get dome elements for individual todo
const generateTodoDom = function (todo) {
    const p = document.createElement('div');
    const textElement = document.createElement('span');
    const button = document.createElement('button');

    button.textContent = 'Remove todo';
    p.appendChild(button);
    p.textContent = todo.text;
    return p;
}

const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    return summary;
}