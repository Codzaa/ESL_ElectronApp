const electron = require('electron')
const {ipcRenderer} = electron
//
import {startHTMLProm} from './startPage.js'
import {bookHTMLProm} from './bookPage.js'
import {unitHTMLProm} from './unitPage.js'
import {bookViewProm} from './bookView.js'
import {unitViewProm} from './unitView.js'
import * as book1_1 from './books/book_1.js'
import * as book2_1 from './books/book_2.js'
import * as book3_1 from './books/book_3.js'
import * as mainPageAnimations from './bobo.js'


let starter_html,book_html,unit_html,bookView_html,unitView_html
let PageNumber

//console.log(book1_1.unit_1.heading)
//Promise to load Data
async function boom(){

    //Load Start Page Data
    startHTMLProm
    .then((data) => {
        //console.log(data)
        starter_html = data
    })
    .catch(err => console.log(err))
    //Load Book Page Data
    bookHTMLProm
    .then((data) => {
       // console.log(data)
        book_html = data
    })
    .catch(err => console.log(err))
    //Load Unit Page Data
    unitHTMLProm
    .then((data) => {
       // console.log(data)
        unit_html = data
    })
    .catch(err => console.log(err))
    //
    //Load Book_View
    bookViewProm
    .then((data) => {
        //console.log(data)
        bookView_html = data
        //console.log(bookView_html)
    })
    .catch(err => console.log(err))
    //
    //Load Unit_View
    unitViewProm
    .then((data) => {
        //console.log(data)
        unitView_html= data
        //console.log(bookView_html)
    })
    .catch(err => console.log(err))
    //
    const result = await call_interactivity()
    console.log(result)
}
//Function called Automatically when the App Starts
boom()

function call_interactivity(){
    return new Promise(resolve => {
        //setTimeout(() => {
          buttons()
          resolve('Interactivity Started');
       // }, 2000);
      });
}

function buttons(){
    //When start page button is clicked then Show Start page Stuff
    /*
    let changer_1 = document.getElementById('start-page-1')
    changer_1.addEventListener('click', function(event){
        //page_requested = 'starter'
        addElement(1)
        console.log('Button Clicked-1')
    })
    */
    //
    let changer_2 = document.getElementById('start-page-2')
    changer_2.addEventListener('click', function(event){
        //page_requested = 'book'
        addElement(2)
        console.log('Button Clicked-2')
    })
    //
    let changer_3 = document.getElementById('start-page-3')
    changer_3.addEventListener('click', function(event){
        //page_requested = 'unit'
        addElement(3)
        console.log('Button Clicked-3')
        //console.log(answer)
    })
}


function addElement(which_page){
    //1.First Clear Canvas
    //delete element
    let el = document.getElementById('content')
    el.remove();

    //4.Finally add the newly created element and its content into the DOM
    let deck_2 = document.getElementById('load_content')
    //deck_2.appendChild(deck_1);
    //console.log('Done')

    //Testing Templates
    if(which_page == 1){
        document.getElementById('load_content').innerHTML = starter_html;
        PageNumber = 1
        console.log(PageNumber)
    }
    if(which_page == 2){
        let node = document.createElement("div");
        node.className = 'container'
        node.id = 'content'
        document.getElementById("hero").appendChild(node);
        node.innerHTML = book_html
        PageNumber = 2
        console.log(PageNumber)
    }
    if(which_page == 3){
        let node = document.createElement("div");
        node.className = 'container'
        node.id = 'content'
        document.getElementById("hero").appendChild(node);
        node.innerHTML = unit_html
        PageNumber = 3
        console.log(PageNumber)
    }

    //Display Book Template
    if(which_page == 'bk')
    {
        console.log('Book Template fetched')
        //
        let node = document.createElement("div");
        node.className = 'container'
        node.id = 'content'
        document.getElementById("hero").appendChild(node);
        node.innerHTML = bookView_html
        PageNumber = 4
        console.log(PageNumber)
        /////////////////////////////////////////////////////////////////
        ///Developer Message

        ///////////////////////////////////////////////////////////////////////
    }

    //Display Unit Template
    if(which_page == 'unit')
    {
        console.log('Unit Template fetched')

        let node = document.createElement("div");
        node.className = 'container'
        node.id = 'content'
        document.getElementById("hero").appendChild(node);
        node.innerHTML = unitView_html
        PageNumber = 5
        console.log(PageNumber)

    }

}

////////////////////////////////////////////////////////////////////////////////////////////
//Modal Displayed when App is started,window is loaded
let modal = document.getElementById('modal')
let closeModalButton = document.getElementById('closeModal')
let timeoutID
//
closeModalButton.addEventListener('click',function(event){
    //closeModal()
    setTimeout(function(){
        closeModal()
    }, 500)
})
//
function closeModal(){
  //
  console.log('close clicked')
  modal.className = 'modal'
  //Part 2
  let el = document.getElementById('content')
  el.remove();
  //Part 3
  let node = document.createElement("div");
  node.className = 'container'
  node.id = 'content'
  document.getElementById("hero").appendChild(node);
  node.innerHTML = book_html
  /**To change the background colour*/
  //document.getElementById('hero').style.background = "#FD9251";
  getMainPage()
}
window.addEventListener('load',(event)=>{
    modal.className = 'modal is-active'
    console.log('window loaded')
})

////////////////////////////////////////////////////////////////////////
//Get Data depending on which Book is clicked
function getMainPage(){
    ///Development Message
    let deleteDevMsg = document.getElementById('deleteMsg').addEventListener('click',function(){
        let msg = document.getElementById('devMsg')
        msg.innerHTML = " ";

    })
    ////////////////////////////////////////////////////
    let book_1 = document.getElementById('book-1')
    book_1.addEventListener('click', function(event){
        //getBook(1)
        console.log('Book 1 Clicked')
    })

    let book_2 = document.getElementById('book-2')
    book_2.addEventListener('click', function(event){
        getBook(2)
        console.log('Book 2 Clicked')
    })

    let book_3 = document.getElementById('book-3')
    book_3.addEventListener('click', function(event){
        //getBook(3)
        console.log('Book 3 Clicked')
    })

    mainPageAnimations.startBookAnimations()

}

function getBook(book_id){
    //Display Book Template
    addElement('bk')
    //
    if(book_id == 1){
        //fetch book stuff
        //Call addElement() telling it which data top puts
        bookFunction(1)
    }
    if(book_id == 2){
        //fetch book 2 stuff
        bookFunction(2)
    }
    if(book_id == 3){
        //fecth book 3 stuff
        bookFunction(3)
    }
}

function bookFunction(value){

    //Change Template
    let bookdata
    let unitData
    //Change title
    let booktitle = document.getElementById('book-title')
    booktitle.textContent = 'B O O K' + '  ' + value
    mainPageAnimations.bookViewAnimations()

    //
    switch(value){
        case 1:
            bookdata = book1_1
            break;
        case 2:
            bookdata = book2_1
            break;
        case 3:
            bookdata = book3_1
            break;
    }


    //Change Unit title
    let unitTitle_1 = document.getElementById('unit-1')
    unitTitle_1.textContent = bookdata.unit_1.heading
    unitTitle_1.addEventListener('click',function(){
        unitData = 1
        getUnit(value,unitData)
    })
    /*
    let unitTitle_2 = document.getElementById('unit-2')
    unitTitle_2.textContent = bookdata.unit_2.heading
    unitTitle_2.addEventListener('click',function(){
        unitData = 2
        getUnit(value,unitData)
    })

    let unitTitle_3 = document.getElementById('unit-3')
    unitTitle_3.textContent = bookdata.unit_3.heading
    unitTitle_3.addEventListener('click',function(){
        unitData = 3
        getUnit(value,unitData)
    })

    let unitTitle_4 = document.getElementById('unit-4')
    unitTitle_4.textContent = bookdata.unit_4.heading
    unitTitle_4.addEventListener('click',function(){
        unitData = 4
        getUnit(value,unitData)
    })

    let unitTitle_5 = document.getElementById('unit-5')
    unitTitle_5.textContent = bookdata.unit_5.heading
    unitTitle_5.addEventListener('click',function(){
        unitData = 5
        getUnit(value,unitData)
    })

    let unitTitle_6 = document.getElementById('unit-6')
    unitTitle_6.textContent = bookdata.unit_6.heading
    unitTitle_6.addEventListener('click',function(){
        unitData = 6
        getUnit(value,unitData)
    })

    let unitTitle_7 = document.getElementById('unit-7')
    unitTitle_7.textContent = bookdata.unit_7.heading
    unitTitle_7.addEventListener('click',function(){
        unitData = 7
        getUnit(value,unitData)
    })

    let unitTitle_8 = document.getElementById('unit-8')
    unitTitle_8.textContent = bookdata.unit_8.heading
    unitTitle_8.addEventListener('click',function(){
        unitData = 8
        getUnit(value,unitData)
    })

    let unitTitle_9 = document.getElementById('unit-9')
    unitTitle_9.textContent = bookdata.unit_9.heading
    unitTitle_9.addEventListener('click',function(){
        unitData = 9
        getUnit(value,unitData)
    })
    */



}

function getUnit(book_id,unitData){
        //fetch book stuff
        ////Display Unit Template
        addElement('unit')

        switch(book_id){
            case 1:
                book1_1.unitFunction(unitData)
                break;
            case 2:
                book2_1.unitFunction(unitData)
                break;
            case 3:
                book3_1.unitFunction(unitData)
                break;
        }
        //book1_1.unitFunction(book_id)

}

//////////////////////////////////////////////////////////

let home_button = document.getElementById('start-page-1')
home_button.addEventListener('click',function(){
    addElement(2)
    getMainPage()
})

let back_button = document.getElementById('start-page-2')
back_button.addEventListener('click',function(){
    console.log('We are on Page' + PageNumber)
    if (PageNumber == 2){
        addElement(2)
        getMainPage()
    } else if(PageNumber == 3){
        addElement(3)
    } else if(PageNumber  == 4){
        addElement(2)
    } else if(PageNumber == 5){
        addElement('unit')
    }
})
