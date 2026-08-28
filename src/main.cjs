const {app,BrowserWindow}=require('electron');const path=require('node:path');function create(){const w=new BrowserWindow({width:1400,height:900,minWidth:1050,minHeight:700,backgroundColor:'#07111f',webPreferences:{contextIsolation:true,sandbox:true}});w.loadFile(path.join(__dirname,'renderer.html'));}app.whenReady().then(()=>{
  require('electron').session.defaultSession.setPermissionRequestHandler((webContents, permission, callback)=>callback(permission==='media'));
  create();
});app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit();});