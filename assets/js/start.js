import {start_html} from './deck.js'
import {book_html} from './bookPage.js'
import {unit_html} from './unitPage.js'

console.log(start_html)

//
let vb = start_html
console.log(vb)
//When start page button is clicked then Show Start page Stuff
let changer_1 = document.getElementById('start-page-1')
changer_1.addEventListener('click', function(event){
    //page_requested = 'starter'
    addElement(1)
    console.log('Button Clicked-1')
})
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
    console.log(answer)
})



//When document loads run the addElement Function
//document.body.onload = addElement

function addElement(which_page){
    //1.First Clear Canvas
    //delete element
    let el = document.getElementById('content')
    el.remove();

    //2.Write to the Canvas
    //Craete eleemnt
    
    //let deck_1 = document.createElement('div.content')
    //Create content 
    //let stuff = document.createTextNode("I am a Super Hero")
    
    //3.Now,append(put) content into the element
    //deck_1.appendChild(stuff);
 

    //4.Finally add the newly created element and its content into the DOM 
    let deck_2 = document.getElementById('master')
    //deck_2.appendChild(deck_1);
    //console.log('Done')

    if(which_page == 1){
        //page_requested = 'starter'
        document.getElementById('master').innerHTML = bind_value();
    }
    if(which_page == 2){
        //page_requested = 'starter'
        document.getElementById('master').innerHTML = book_html;
    }
    if(which_page == 3){
        //page_requested = 'starter'
        document.getElementById('master').innerHTML = unit_html;
    }
    
}





 
