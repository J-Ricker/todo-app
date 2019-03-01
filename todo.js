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

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed;
})

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('section').appendChild(summary);

todos.forEach(function (todo) {
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('section').appendChild(p);
})

document.querySelector('#add-todo').addEventListener('click', function (e) {
    e.target.textContent = 'A new todo was added';
})

document.querySelector('#new-todo-text').addEventListener('input', function (e) {
    console.log(e.target.value);
})