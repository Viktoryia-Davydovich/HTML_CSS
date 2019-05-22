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
                i = 5;            
                console.log("You are welcome!")
            }, 3000);
        }
    }
//3d

function RandomInterval(){
    var rand = 1 + Math.random() * (4 + 1 - 1);
    rand = Math.floor(rand);
    return rand * 1000;
}

document.getElementById("bgbtn").onclick = function(){
    if (interval){
        clearInterval(interval);
        interval = null;
    }
    else{
        interval = setInterval(() => {
            i = 5;            
            console.log("Hey")
        }, RandomInterval());
    }
}
};

