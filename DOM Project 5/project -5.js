// Variables
const addTask = document.querySelector('.add-task');
const taskContainer = document.querySelector('.task-container');
const inputTask = document.querySelector('.input');

// Event Listener for Add Button

addTask.addEventListener('click', () => {
  const task = document.createElement('div');
  task.classList.add('task');

  const li = document.createElement('li');
  li.innerText = `${inputTask.value}`;
  li.classList.add('li');
  task.append(li);

  const checkButton = document.createElement('button');
  checkButton.innerText = 'Check';
  checkButton.classList.add('ckeckTask');
  task.append(checkButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.classList.add('deleteTask');
  task.append(deleteButton);

  if (inputTask.value === '') {
    alert('Please Enter a task');
  } else {
    taskContainer.append(task);
  }

  inputTask.value = '';

  checkButton.addEventListener('click', () => {
    li.style.textDecoration = 'line-through';
  });

  deleteButton.addEventListener('click', e => {
    e.target.parentElement.remove();
  });

  displayText(inputTask.value);
});
