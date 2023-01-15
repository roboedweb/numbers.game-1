const slider = document.getElementById("myRange");
const maxWindow = document.querySelector(".max");
const minus = document.querySelector('.minus');
const plus  = document.querySelector('.plus');
const diapason_Alert = document.querySelector('.diapason');
slider.oninput = function() {
    maxWindow.innerHTML = slider.value;
    diapAlert()
}
const start = document.getElementById('start')
start.addEventListener('click',NBG);
minus.addEventListener('click',sliderminus)
plus.addEventListener('click',sliderplus)

function sliderminus() {
    slider.value--;
    maxWindow.innerHTML = slider.value;
    diapAlert()
}
function sliderplus() {
    slider.value++;
    maxWindow.innerHTML = slider.value;
    diapAlert()
}
function diapAlert() {
    diapason_Alert.innerHTML = `you must guess number from 1 to ${slider.value}`
}

function NBG(){
    let diapason = Number(slider.value)
    let tries;

    let triesbutton = document.getElementsByName("tries")
    for(let i=0; i<triesbutton.length;i++) {
        if (triesButton[i].checed){}
    }

    while (true) {
        if(isNaN(diapason)){
            alert('you must write number');
            diapason = +prompt('enter interval from 2 too ...');
        }
        else{
            break;
        }
    }
    let RandomNumber = Math.floor(Math.random() * diapason+1);
    let number;
    for (let i=1;i<=tries;i++) {
        number = +prompt('what number?')
        if(number < RandomNumber) {
            alert('твоє число замале')
        }
        else if(number > RandomNumber) {
            alert('твоє число завелике')
        }
        alert(`ти використав ${i} спроб`)
        if(RandomNumber==number){
            alert('you win')
            break;
        }
    }
}