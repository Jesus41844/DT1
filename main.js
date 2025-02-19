const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { spawn } = require('child_process');

const backendProcess = spawn('node', [server.js]);

backendProcess.stdout.on('data', (data) => {
    console.log(`Backend: ${data}`);
});
  
backendProcess.stderr.on('data', (data) => {
    console.error(`Backend Error: ${data}`);
});

function createWindow() {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        },
    });
   
    mainWindow.loadURL('http://localhost:4200');

}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (backendProcess) backendProcess.kill();
    app.quit();
});