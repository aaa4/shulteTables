



function changeTextByElementId() {
    console.log("Change text function");
    let element = document.getElementById("text");
    console.log("Changing element is ")
    console.log(element);
    element.innerHTML = "Новый текст после нажатия кнопки. :)"

}

function changeTextByElementClassname() {
    console.log("change by class name");
    console.log("element is");
    let elem = document.getElementsByClassName("textClass");
    console.log(elem[0]);
}


function createCanvas() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.strokeRect(0,0, 600, 600);
    ctx.stroke();
    drawGridText(ctx);

    drawkey(ctx, "q");

}

function drawkey(ctx, key){
    document.addEventListener('keydown', function (event){
        //alert(event.key);
        if ( event.key == key){
            ctx.lineWidth = 4;
            ctx.strokeStyle = "#23b810";
            ctx.strokeRect(50, 50, 100, 100);
            ctx.strokeRect(150, 50, 100, 100);
            ctx.stroke();
        }
    });
}




function drawGridText(ctx) {
    ctx.strokeStyle = "#000";
    ctx.font = "30px Arial";
    let width = 5, height = 5;
    let currentIndex = 0;

    let randomNumbers = getRandomOrderNumbers();
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            let dx = 40;
            let dy=50;
          //  console.log("i = "+i+ "; j = " +j);
            let startX = 50+j*100;
            let startY = 50+i*100;
            let currentValue = randomNumbers[currentIndex];
            if ( currentValue >=10){
                dx = 30;

            }

            ctx.strokeRect(startX, startY, 100, 100);
            ctx.fillText(currentValue, j*100+50+dx, i*100+60+dy);
            ctx.stroke();
            console.log("dx = "+dx+"; dy = "+dy+"; currentValue = "+currentValue)
            currentIndex += 1;

        }
    }

}


function getNumbers(){
    let numbers = [];
    for (let i = 1; i < 26; i++) {
        numbers.push(i);
    }
    //console.log(numbers);
    return numbers;
}

function getRandomIdx(){
    let number = Math.random()*10;
    number = Math.trunc(number);

    return number;
}

//min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//returns randomOrdered array with length == getNumbers().length
function getRandomOrderNumbers(){
    let orderedNumbers = getNumbers();
    let randomNumbers = [];

    while (orderedNumbers.length > 0){
        let randomIdx = getRandomInt(0,orderedNumbers.length-1)
        let currentIdx = orderedNumbers.splice(randomIdx, 1);
        randomNumbers.push(currentIdx[0]);

    }

    return randomNumbers;
}


createCanvas();
getRandomOrderNumbers();
getRandomIdx();