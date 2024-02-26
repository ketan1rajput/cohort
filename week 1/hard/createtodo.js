class Todo {
    constructor() {
        this.todos = [];
    }

    add(todo) {
        this.todos.push(todo);
    }

    remove(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            this.todos.splice(indexOfTodo, 1);
        } else {
            console.log("Index out of range");
        }
    }

    update(index, updatedTodo) {
        if (index >= 0 && index < this.todos.length) {
            this.todos[index] = updatedTodo;
        } else {
            console.log("Index out of range");
        }
    }

    getAll() {
        return this.todos;
    }

    get(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            return this.todos[indexOfTodo];
        } else {
            console.log("Index out of range");
            return null;
        }
    }

    clear() {
        this.todos = [];
    }
}

module.exports = Todo;

// Test the implementation
const todoList = new Todo();
todoList.add("Task 1");
todoList.add("Task 2");
todoList.add("Task 3");

console.log("Initial todo list:", todoList.getAll());

todoList.remove(1);
console.log("Todo list after removing at index 1:", todoList.getAll());

todoList.update(0, "Updated Task 1");
console.log("Todo list after updating at index 0:", todoList.getAll());

console.log("Todo at index 0:", todoList.get(0));

todoList.clear();
console.log("Todo list after clearing:", todoList.getAll());
