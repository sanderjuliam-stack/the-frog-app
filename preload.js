const { contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld("api", {
  encerrarApp: () => ipcRenderer.send("encerra-app")
});