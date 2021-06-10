const electron = require('electron')
const {ipcRenderer} = electron

let html_data
let need_page ='starter'

ipcRenderer.send('need_file0',need_page)
ipcRenderer.on('receive_filestarter',(event,data)=>{
   //console.log(data)
   html_data = data
})


export function waitForElement(){
    if(typeof html_data !== "undefined"){
            console.log('Success from timer')
    }else{
        setTimeout(waitForElement, 250);
        console.log('Error from timer')
    }
}



export let startHTMLProm = new Promise ((resolve,reject) =>{
    setTimeout(() => {
        //waitForElement()
        if(typeof html_data !== undefined){
            resolve(html_data)
            //console.log(html_data)
        }
        else{
            reject('Error:Promise Broken')
        }

    },500)
    })





//export {start_html}
