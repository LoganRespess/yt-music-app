const { app, BrowserWindow } = require('electron');

function createWindow() {
const win = new BrowserWindow({
width: 800,
height: 600,
webPreferences: {
nodeIntegration: true,
contextIsolation: false,
},
});

4// Load your web application URL 
win.loadURL('https://music.youtube.com/'); 
// Optional: Open the DevTools. 
// win.webContents.openDevTools(); 
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
if (process.platform !== 'darwin') {
app.quit();
}
});

app.on('activate', () => {
if (BrowserWindow.getAllWindows().length === 0) {
createWindow();
}
});