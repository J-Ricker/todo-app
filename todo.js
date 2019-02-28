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

// const removeTodo = function (todos, todoText) {
//     const index = todos.findIndex(function (todo) {
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })
//     if (index > -1) {
//         todos.splice(index, 1);
//     } else {
//         console.log('no todo matches')
//     }
// }

const getThingsTodo = function(todos) {
    return todos.filter(function (todo, index) {
        return !todo.completed;
    })
}


console.log(getThingsTodo(todos));


// removeTodo(todos, 'order Cat food!');
// console.log(todos);