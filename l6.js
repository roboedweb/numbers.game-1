function NBG(){
    let diapason = +prompt('enter interval from 2 too ...');
    while (true) {
        if(isNaN(diapason)){
            alert('you must write number');
            diapason = +prompt('enter interval from 2 too ...');
        }
        else{
            break;
        }
    }

    alert(`you must вгадати number from 1 to ${diapason}`);
    let RandomNumber = Math.floor(Math.random() * diapason+1);
    switch (diapason) {
        case 50:
            tries=8;
            break;
        case 100:
            tries=9;
            break;
        case 200:
            tries=10;
            break;
        case 400:
            tries=11;
            break;
        default:
            tries=7;
            break;
    }
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
let continu; 
NBG()
while(true) {
    let continu = prompt('play more?','1-yes,2-no')
    if (continu == 1){
        NBG();
    } 
        break;
    }
    else{
        alert("you must write 1 or 2")
    }
}