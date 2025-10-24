
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
let todos = JSON.parse(localStorage.getItem('todos')) || [];

let currentFilter = 'all';

// Add filter button event listeners
document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.filter;
    document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTodos();
  });
});

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}


function renderTodos() {
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    if (
      (currentFilter === 'active' && todo.completed) ||
      (currentFilter === 'completed' && !todo.completed)
    ) return;

    const li = document.createElement('li');
    li.className = todo.completed ? 'completed' : '';

    const span = document.createElement('span');
    span.textContent = todo.text;
    span.addEventListener('click', () => {
      todos[index].completed = !todos[index].completed;
      saveTodos();
      renderTodos();
    });

    const delBtn = document.createElement('button');
    delBtn.textContent = '✖';
    delBtn.className = 'delete';
    delBtn.addEventListener('click', () => {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodo = input.value.trim();
  if (newTodo) {
    todos.push({ text: newTodo, completed: false });
    saveTodos();
    renderTodos();
    input.value = '';
  }
});


renderTodos();

// Keyboard shortcut: Enter submits form
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    form.dispatchEvent(new Event('submit'));
  }
});

// Keyboard shortcut: Delete removes all completed todos
document.addEventListener('keydown', (e) => {
  if (e.key === 'Delete') {
    const completedIndexes = todos.map((t, i) => t.completed ? i : -1).filter(i => i !== -1);
    completedIndexes.reverse().forEach(i => todos.splice(i, 1));
    saveTodos();
    renderTodos();
  }
});

const darkToggle = document.getElementById('dark-mode-toggle');
darkToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark', darkToggle.checked);
});