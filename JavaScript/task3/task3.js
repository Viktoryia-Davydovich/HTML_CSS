window.onload = function(){ 

// 1st
    document.getElementById("grbtn").onclick = function(){
        setTimeout(() => {
            console.log("Hello world!")
        }, 5000);
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
    var rand = 1 + Math.random() * (4 + 1 - 1);
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
inp.onkeyup = function(){

    function timer(){
        var text = inp.value;
        console.log(text)
    }

    setTimeout(timer, 1000);
}

};


