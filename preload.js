const { contextBridge, exposeInMainWorld, ipcRenderer } = require('electron');
const square = require('@square');  // Carga el SDK de Square aquí

console.log('Preload script cargado');
contextBridge.exposeInMainWorld('squareAPI', {
    loadSquare: () => {
        return ipcRenderer.invoke('load-square')
    }    
});