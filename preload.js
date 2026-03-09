const { contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld("api", {
  encerrarApp: () => ipcRenderer.send("encerra-app"),
  minimizaApp: () => ipcRenderer.send("minimiza-app")
});