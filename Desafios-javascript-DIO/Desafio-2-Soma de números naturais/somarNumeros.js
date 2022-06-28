const A = parseInt(gets());
const B = parseInt(gets());

const total = calc((B - A + 1)*(A+B)/2);

function calc() {

    arrTotal = [];
    let calculo = 0;

    for (let y = A; y <= B; y++){
        arrTotal.push(y);
    } 

    for (let num of arrTotal){
        calculo += num;
    } 

    
}

print(total);