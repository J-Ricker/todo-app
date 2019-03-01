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

const btn = document.querySelector('button');

btn.addEventListener('click', function (e) {
    e.target.textContent = 'A new todo was added';
})