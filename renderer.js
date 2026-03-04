let froggyToDo = JSON.parse(localStorage.getItem("froggyToDo")) || [];
const btnClose = document.getElementById("close-window");
const btnAdd = document.getElementById("btn-add");
const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");


document.addEventListener('DOMContentLoaded', () => {
    btnClose.addEventListener('click', () => {
        window.api.encerrarApp();
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
        inputTask.value = "";
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
                <input type="checkbox" class='input-checkbox' id='input-${index}' ${item.check ? 'checked' : ''} />
                <label for="input-${index}" class="label-task">
                    <img src="img/check.png" alt="checked" />
                </label>            
            </div>
            <p id='p-${index}' class="${item.check ? 'checked' : ''}" onclick="editTask(${index})">${item.text}<p/>
            <button class="btn-delete" onclick="deleteTask(${index})">
                <img src="img/delete-icon.png" alt="delete task" />
            </button>
        `;
        taskContainer.querySelector(".input-checkbox").addEventListener('change', () => {
            toggleTask(index);
        })
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
    saveInLocalStorage();
    displayTasks();
};

function saveInLocalStorage () {
    localStorage.setItem("froggyToDo", JSON.stringify(froggyToDo));
};





// // 1. Função isolada para criar o elemento (usada pelo botão e pelo load)
// function createTaskElement(texto = "", concluida = false) {
//     const taskId = `task-${Date.now()}`;
//     const container = document.createElement('div');
//     container.className = 'task-container';
    
//     container.innerHTML = `
//     <li>
//       <div class="checkbox-container">
//         <input type="checkbox" id="${taskId}" ${concluida ? 'checked' : ''} />
//         <label for="${taskId}" class="label-task">
//           <img src="img/check.png" alt="checked" />
//         </label>
//       </div>
//       <input type="text" class="text-input" maxlength="15" value="${texto}" />
//       <button class="btn-delete">
//         <img src="img/delete-icon.png" alt="delete task" />
//       </button>
//     </li>
//     `;

//     // Adiciona evento de salvar sempre que o texto mudar ou o checkbox for clicado
//     container.querySelector('.text-input').addEventListener('input', salvarTarefas);
//     container.querySelector('input[type="checkbox"]').addEventListener('change', salvarTarefas);

//     taskList.appendChild(container);
//     return container;
// }

// // 2. Salvar no LocalStorage
// function salvarTarefas() {
//     const tarefas = [];
//     const containers = document.querySelectorAll('.task-container');

//     containers.forEach(container => {
//         const input = container.querySelector('.text-input');
//         const checkbox = container.querySelector('input[type="checkbox"]');
        
//         tarefas.push({
//             texto: input.value,
//             concluida: checkbox.checked
//         });
//     });
//     localStorage.setItem('minhas-tarefas-sapinho', JSON.stringify(tarefas));
// }

// // 3. Carregar ao iniciar
// function carregarTarefas() {
//     const dados = localStorage.getItem('minhas-tarefas-sapinho');
//     if (!dados) return;

//     const tarefas = JSON.parse(dados);
//     tarefas.forEach(tarefa => {
//         createTaskElement(tarefa.texto, tarefa.concluida);
//     });
// }

// // --- Eventos ---

// btnAdd.addEventListener('click', () => {
//     createTaskElement();
//     salvarTarefas();
// });

// taskList.addEventListener('click', (event) => {
//     // Ajustado para .btn-delete (conforme seu HTML)
//     const btnDelete = event.target.closest('.btn-delete');

//     if (btnDelete) {
//         const containerToRemove = btnDelete.closest('.task-container');
//         containerToRemove.remove();
//         salvarTarefas(); 
//     }
// });

// // Inicialização
// carregarTarefas();