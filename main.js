const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 420,
    height: 680,
    resizable: false,
    frame: false,
    fullscreenable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadFile("index.html");
}

ipcMain.on("encerra-app", () => {
  app.exit(0);
});

ipcMain.on("minimiza-app", () => {
  if (win) {
    win.minimize();
  }
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
