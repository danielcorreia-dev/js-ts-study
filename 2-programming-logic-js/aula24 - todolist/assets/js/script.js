(() => {
  // Settting the elements
  const addButton = document.querySelector('.add-task');
  const taskInput = document.querySelector('.task');
  const tasksList = document.querySelector('.tasks');
  const deleteBtn = document.querySelector('.delete');

  // Call to action
  addButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (!taskInput.value) return;
    createTask(taskInput.value);
  });

  taskInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      if (!taskInput.value) return;
      createTask(taskInput.value);
    }
  });

  document.addEventListener('click', (e) => {
    const element = e.target;
    if(element.classList.contains('delete')) {
      element.parentElement.remove();
      saveTask();
    }
  })

  // Functions
  function createDeleteBtn(li) {
    const deleteBtn = document.createElement('button');
    li.innerText += '  ';
    deleteBtn.setAttribute('class', 'delete');
    deleteBtn.setAttribute('title', 'delete button');

    deleteBtn.innerText = 'Delete';
    li.appendChild(deleteBtn);
  }

  function cleanInput() {
    taskInput.value = '';
    taskInput.focus();
  }

  function createTask(text) {
    const li = createLi();
    li.innerText = text;
    tasksList.appendChild(li);
    createDeleteBtn(li);
    cleanInput();
    saveTask();
  }

  function createLi() {
    const li = document.createElement('li');
    return li;
  }

  function saveTask(){
    const liTasks = tasksList.querySelectorAll('li')
    const arrayLi = []

    for (let tasks of liTasks) {
      let textTask = tasks.innerText;
      textTask = textTask.replace('Delete', '').trim();
      arrayLi.push(textTask);
    }

    const taskJSON = JSON.stringify(arrayLi);
    console.log(taskJSON);

    localStorage.setItem('task', taskJSON);
  };

  function readJSON() {
    const tasks = localStorage.getItem('task');
    const taskList = JSON.parse(tasks);

    for (task of taskList) {
      createTask(task);
    }
  }
 
  readJSON();
})();
