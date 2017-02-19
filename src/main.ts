import electron = require("electron");
let app = electron.app;
let dialog = electron.dialog;
let BrowserWindow = electron.BrowserWindow;
let Menu = electron.Menu;

import { CONFIG } from './config'

// Global reference to the main window, so the garbage collector doesn't close it.
let mainWindow: Electron.BrowserWindow;
let ipcMain = electron.ipcMain;

// Opens the main window, with a native menu bar.
function createWindow() {
 
 /**
  * @link https://github.com/electron/electron/blob/master/docs/api/frameless-window.md
  */
  mainWindow = new BrowserWindow(
    { 
      width: 700 ,
      height: 300 ,
      frame: false,
      transparent: false,
      // ico required?
      icon: "asset/icon/moon.png",
      title: CONFIG.Title
    }
    );
    /**
      //center: false ,
       String - Window's background color as Hexadecimal value, like #66CD00 or #FFF or #80FFFFFF (alpha is supported). Default is #FFF (white)
      backgroundColor: "#FFF",
      transparent: false
     */
/**
  Menu.setApplicationMenu(
    Menu.buildFromTemplate([
    {
      label: "Draw Symbol",
      submenu: [
        {
          label: "YHOO",
          click: () => {
            mainWindow.webContents.send("draw_symbol", "YHOO");
          }
        },
        {
          label: "CSCO",
          click: () => {
            mainWindow.webContents.send("draw_symbol", "CSCO");
          }
        },
        {
          label: "MSFT",
          click: () => {
            mainWindow.webContents.send("draw_symbol", "MSFT");
          }
        },
        {
          label: "Exit",
          click: () => {
            app.quit();
          }
        }
      ]
    }
  ]));
  **/

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

/**
 * @link http://electron.atom.io/docs/api/ipc-main/
 */
ipcMain.on("log", (origin,message) => {
  console.log(message);
});
ipcMain.on('uncaughtException', (origin,arg) => {
  console.log(arg);
});

// Call 'createWindow()' on startup.
app.on("ready", () => {
  createWindow();
  console.log("!!!! MAIN #1");
  if( CONFIG.Debug ) {
    if(!mainWindow.webContents.isDevToolsOpened()){
      // TODO :: SEE :: http://electron.atom.io/devtron/
      if ( BrowserWindow.getDevToolsExtensions().hasOwnProperty('devtron') ){
        
      }
      BrowserWindow.addDevToolsExtension(CONFIG.DevTools.React);
      
      mainWindow.webContents.openDevTools();
    }
  }
  
  mainWindow.webContents.send("init");
  /** Load non-main files */
  if (process.argv[1] != "main.js") {
    mainWindow.webContents.on("did-finish-load", () => {
      mainWindow.webContents.send("load-file", process.argv[1]);
    });
  }

  mainWindow.webContents.on('crashed', (origin,arg) => {
      console.log(arg);
    });
  mainWindow.on('unresponsive', (origin,arg) => {
      console.log(arg);
    });
});

// On OS X it is common for applications and their menu bar to stay active until the user quits explicitly
// with Cmd + Q.
app.on("window-all-closed", () => {
  //if (process.platform !== "darwin") {
    app.quit();
  //}
});

// On OS X it's common to re-create a window in the app when the dock icon is clicked and there are no other
// windows open.
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
