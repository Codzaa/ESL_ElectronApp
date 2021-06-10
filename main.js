//
const electron = require('electron')
//
const { app,BrowserWindow, ipcMain, dialog, Menu,screen} = electron
//
const fs=require('fs')
//
const file_name_path = require('path');
//
let file_name,file_name1,file_name2,file_name3
//
const child = require('child_process');
//Warning about deprecating something to with this dont touch(Need to do more Research)
//electron.app.allowRendererProcessReuse = true;
//Window variable
let win
//
let newName,oldName
//
//When Our Main Process is ready
app.on('ready',()=>{
  console.log('Main Process is Running')
})
//
app.whenReady().then(() => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  //win = new BrowserWindow({width:width,height:height})
  win = new BrowserWindow({
    width,
    height,
    //show: false ,
    //frame:false,
    webPreferences:{
      nodeIntegration:true
    }
  });
  win.loadFile('index.html');
})
//
ipcMain.on('open-example-game',(event,data)=>{
  console.log("Madddiiis");
  gameBox();
});
//
function gameBox(){
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  let gameBoxWin = new BrowserWindow({
    width,
    height,
    webPreferences:{
      nodeIntegration:true
    }
  });
  gameBoxWin.loadFile('assets/hzint.org/matcher.html');
}
//Open Game1
ipcMain.on('open-game',(event,data) => {
  //
  oldName = data
  let exten = oldName.slice(-4)
  console.log(exten)

  if (exten == '.txt'){
    newName = oldName.replace(".txt",".exe")
    console.log(newName)

    //
    fs.rename(oldName, newName, function (err) {
      if (err) throw err;
      console.log('File Renamed to ',newName);
    });

    let executablePath = newName;
    child.execFile(executablePath, function(error, stdout, stderr) {
        if(error){
           console.error(error);
           return;
        }

        console.log(stderr.toString());
        console.log("Program closed");

        fs.rename(newName, oldName, function (err) {
          if (err) throw err;
          console.log('File Renamed.',oldName);
        });

    });
  }




})

//Reading from a file Xdoc
//f
function open_File(value){
  //
  file_name1='./assets/templates/starter.html'
  file_name2='./assets/templates/book.html'
  file_name3='./assets/templates/unit.html'
  file_name4='./assets/templates/book_view.html'
  file_name5='./assets/templates/unit_view.html'
    //
    //
    let msg = `receive_file`+ value
    if (value == `starter`){
      file_name = file_name1
    }
    if (value == `book`){
      file_name = file_name2
    }
    if (value == `unit`){
      file_name = file_name3
    }
    if (value == `bookview`){
      file_name = file_name4
    }
    if (value == `unitview`){
      file_name = file_name5
    }
    //
    //Extension test
    let exten = file_name.slice(-5)
    console.log(exten)
    console.log(file_name)
    console.log(msg)
    //
    if(exten == '.html' ){
        fs.readFile(file_name,'utf-8',(err,data) => {
            if (err) throw err
            //
            //console.log(data)
            //
            win.webContents.send(msg,data)
            })
    }else{
        console.log('Not Correct file format')
    }
  }
//
ipcMain.on('need_file0',(event,data) => {
  open_File(data);
  console.log('need_file' + data)
})
