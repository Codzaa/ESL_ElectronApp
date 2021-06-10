//Scripts for bobo
document.getElementById("bobo").onclick = mouseClickBobo;
document.getElementById("bobo").addEventListener("mouseout", mouseOut);

//Scripts for Button
document.getElementById('closeModal').onclick = mouseClickbtna;


function mouseClickBobo() {
    const element1 =  document.querySelector('.avatar')
    element1.classList.remove('animated', 'pulse', 'infinite' , 'slower', 'delay-5s')
    element1.classList.add('animated', 'bounce', 'infinite')
}

function mouseOut() {
    const element2 =  document.querySelector('.avatar')
    element2.classList.remove('animated', 'bounce', 'infinite')
    element2.classList.add('animated', 'pulse', 'infinite' , 'slower', 'delay-1s')
}


function mouseClickbtna(){
    const element3 = document.getElementById('closeModal')
    element3.classList.remove( 'animate__infinite', 'animate__rubberBand', 'animate__slow')
    //animate__animated animate__infinite animate__rubberBand animate__slow
    element3.classList.add( 'animate__bounceOutLeft')
    //startBookAnimations()
}

let book
//Main Page Animation(Books Animation)
export function startBookAnimations(){
    book = document.getElementsByClassName('cardmain')
    console.log(book)

    book[0].classList.add('animate__fadeInUpBig', 'animate__slower')
    book[1].classList.add('animate__fadeInDownBig', 'animate__slower')
    book[2].classList.add('animate__fadeInRightBig', 'animate__slower')
    setTimeout(function(){ 
        hoverAnimation()
    }, 3500)
    //
}

function hoverAnimation(){
    try {
        //*Book 1
    /*book[0].addEventListener("mouseover", function( event ) {   
        // highlight the mouseover target
        book[0].classList.remove('animate__fadeInUpBig', 'animate__slower')
        book[0].classList.add('animate__heartBeat','animate__slower')
        }, false);
    book[0].addEventListener("mouseout", function( event ) { 
        book[0].classList.remove('animate__heartBeat','animate__slower')
    }, false);*/
    //Book 2
    book[1].addEventListener("mouseover", function( event ) {   
        // highlight the mouseover target
        book[1].classList.remove('animate__fadeInDownBig', 'animate__slower')
        book[1].classList.add('animate__heartBeat','animate__slower')
        }, false);
    book[1].addEventListener("mouseout", function( event ) { 
        book[1].classList.remove('animate__heartBeat','animate__slower')
    }, false);    
    //Book 1
    /*book[2].addEventListener("mouseover", function( event ) {   
        // highlight the mouseover target
        book[2].classList.remove('animate__fadeInRightBig', 'animate__slower')
        book[2].classList.add('animate__heartBeat','animate__slower')
        }, false);
    book[2].addEventListener("mouseout", function( event ) { 
        book[2].classList.remove('animate__heartBeat','animate__slower')
    }, false); */ 
    } catch (error) {
        console.log('Hover Skipped')
    }
    
}

/*****************************Book View Animation(Showing All Units)*********************************************/
let units = document.getElementsByClassName('unit')
export function bookViewAnimations(){
    for(let i = 0;i<units.length;i++){
        console.log(units[i])
        units[i].classList.add('animate__animated','animate__zoomInUp','animte__slow')
    }
}

