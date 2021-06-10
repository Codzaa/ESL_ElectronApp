//Scripts for bobo
document.getElementById("bobo").onclick = mouseClickBobo;
document.getElementById("bobo").addEventListener("mouseout", mouseOut);

//Scripts for Button
document.getElementById("btna").onclick = mouseClickbtna;


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
    const element3 = document.querySelector('.sta')
    element3.classList.remove('animated', 'rubberBand', 'infinite', 'delay-5s')
    element3.classList.add('animated', 'bounceOutLeft')
}
