const fs = require('fs');
const file = 'todos.json';

// Load existing todos or start with empty list
function loadTodos() {
  try {
    const dataBuffer = fs.readFileSync(file);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

// Save todos to file
function saveTodos(todos) {
  const dataJSON = JSON.stringify(todos);
  fs.writeFileSync(file, dataJSON);
}

function addTodo(task) {
    const todos = loadTodos();
    todos.push({ task, done: false });
    saveTodos(todos);
    console.log(`Added todo: "${task}"`);
}

function listTodos() {
    const todos = loadTodos();
    if (todos.length === 0) {
      console.log('No todos found!');
    } else {
      console.log('Todo List:');
      todos.forEach((todo, index) => {
        const status = todo.done ? '[✔]' : '[ ]';
        console.log(`${index + 1}. ${status} ${todo.task}`);
      });
    }
}

function deleteTodo(index) {
    const todos = loadTodos();
    if (index < 1 || index > todos.length) {
      console.log('Invalid todo number');
      return;
    }
    const removed = todos.splice(index - 1, 1);
    saveTodos(todos);
    console.log(`Deleted todo: "${removed[0].task}"`);
}

const [,, command, ...args] = process.argv;

switch(command) {
  case 'add':
    addTodo(args.join(' '));
    break;
  case 'list':
    listTodos();
    break;
  case 'delete':
    deleteTodo(parseInt(args[0]));
    break;
  default:
    console.log('Commands: add, list, delete');
}

/* Use 

node H.SimpleCLI.js add "Learn Node.js"

node H.SimpleCLI.js list

node H.SimpleCLI.js delete 2

*/