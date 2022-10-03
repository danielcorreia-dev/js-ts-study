(() => {
  const addTask = document.querySelector('.add-task');
  const inputTask = document.querySelector('.input');
  const taskList = document.querySelector('.tasks');

  const taskArray = [];
  addTask.addEventListener('click', (e) => {
    e.preventDefault();
    if(!inputTask.value) return;

    createTask(inputTask.value)
  });

  function createTask(msg) {
    const li = createLi();
    li.innerText = msg;
    taskList.appendChild(li);
  }

  function createLi(){
    const li = document.createElement('li')
    return li;
  }
})();
