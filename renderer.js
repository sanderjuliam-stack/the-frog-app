document.getElementById("close-window").addEventListener("click", () => {
  window.api.encerrarApp();
})
document.getElementById("btn-add-task").addEventListener("click", () => {
  window.api.adicionaTask();
})
