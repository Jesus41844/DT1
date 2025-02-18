const { contextBridge, ipcRenderer } = require('electron');
const square = require('@square/web-sdk');  // Carga el SDK de Square aquí

contextBridge.exposeInMainWorld('squareAPI', {
    loadSquare: () => square('EAAAl8tker929BBMW6o-ispHbvPFh0BE21La25hhXXMwPIOIvBDPGqC18ALhFnU1')
});