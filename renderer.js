let froggyToDo = JSON.parse(localStorage.getItem("froggyToDo")) || [];

const btnClose = document.getElementById("close-window");
const btnMinimize = document.getElementById("minimize-window") ;
const btnAdd = document.getElementById("btn-add");
const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");
const checkbox = document.getElementsByClassName("input-checkbox");
const sprite = document.getElementById("sprite");

document.addEventListener('DOMContentLoaded', () => {
    btnClose.addEventListener('click', () => {
        window.api.encerrarApp();
    });
    btnMinimize.addEventListener('click', () => {
        window.api.minimizaApp();
    });
    btnAdd.addEventListener('click', () => {
        addTask();
    });
    inputTask.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask();
        }
    });
    displayTasks();
});

function addTask () {
    const newTask = inputTask.value.trim();
    if (newTask !== '') {
        froggyToDo.push({
            text: newTask,
            check: false
        });
        saveInLocalStorage();
        inputTask.value = '';
        displayTasks();
    }
};

function displayTasks() {
    taskList.innerHTML = '';
    froggyToDo.forEach((item, index) => {
        const taskContainer = document.createElement('li');
        taskContainer.className = 'task-container';
        taskContainer.innerHTML = 
        `
            <div class="checkbox-container">
                <input type="checkbox" class="input-checkbox" id="input-${index}" ${item.check ? 'checked' : ''} />
                <label for="input-${index}" class="label-task">
                    <img src="img/check.png" alt="checked" />
                </label>            
            </div>
            <p id="p-${index}" class="${item.check ? 'checked' : ''}" onclick="editTask(${index})">${item.text}</p>
            <button class="btn-delete" onclick="deleteTask(${index})">
                <img src="img/delete-icon.png" alt="delete task" />
            </button>
        `;
        taskContainer.querySelector('.input-checkbox').addEventListener('change', () => {
            toggleTask(index);
        });
        taskList.appendChild(taskContainer);
    });
}; 

function editTask(index) {
  const taskToEdit = document.getElementById(`p-${index}`);
  const existingText = froggyToDo[index].text;
  const inputElement = document.createElement("input");
  inputElement.className = 'input-element';

  inputElement.value = existingText;
  taskToEdit.replaceWith(inputElement);
  inputElement.focus();

  inputElement.addEventListener("blur", function () {
    const updatedText = inputElement.value.trim();
    if (updatedText) {
      froggyToDo[index].text = updatedText;
      saveInLocalStorage();
    }
    displayTasks();
    });
};

function deleteTask(index) {
    froggyToDo.splice(index, 1);
    saveInLocalStorage();
    displayTasks();
};

function toggleTask(index) {
    froggyToDo[index].check = !froggyToDo[index].check;
    if (froggyToDo[index].check === true) {
        triggerJump()
    };
    saveInLocalStorage();
    displayTasks();
};

function triggerJump (){
    sprite.classList.remove('principal');
    sprite.classList.add('jump');

    sprite.addEventListener('animationend', () => {
        sprite.classList.remove('jump');
        sprite.classList.add('principal');
    });
};

function saveInLocalStorage () {
    localStorage.setItem('froggyToDo', JSON.stringify(froggyToDo));
};