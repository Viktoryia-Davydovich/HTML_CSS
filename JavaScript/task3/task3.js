window.onload = function(){ 

// 1st

let interval_click;

    document.getElementById("grbtn").onclick = function(){
        if (interval_click){
            clearTimeout(interval_click);
            interval_click = null;
        }
        else{
            interval_click = setTimeout(() => {
                console.log("Hello world!")
            }, 5000);
        }
    }


//2nd
    let interval;

    document.getElementById("pkbtn").onclick = function(){
        if (interval){
            clearInterval(interval);
            interval = null;
        }
        else{
            interval = setInterval(() => {      
                console.log("You are welcome!")
            }, 3000);
        }
    }


//3d

let intervalbg;

function RandomInterval(){
    var rand = 1 + Math.random() * 4;
    rand = Math.floor(rand);
    return rand * 1000;
}

document.getElementById("bgbtn").onclick = function(){
    if (intervalbg){
        clearTimeout(intervalbg);
        interval = null;
    }
    else{
        var x;
        intervalbg = setTimeout(function tick(){
            x = RandomInterval();                    
            console.log(`seconds + ${x/1000}`);
            intervalbg = setTimeout(tick, x);
          }, x);
    }
}

// 4th
let inp = document.getElementById("inpfield");
let interval_inp;

inp.onkeyup = function(){

    if (interval_inp){
        clearTimeout(interval_inp);
        interval_inp = null;
    }
    else{
        interval_inp = setTimeout(() => console.log(inp.value), 1000);
    }
}
};



