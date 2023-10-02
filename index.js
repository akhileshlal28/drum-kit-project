var len = document.querySelectorAll(".drum").length;

for(var i=0; i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", color);
}

function color(){

    var buttonInnerHTML = this.innerHTML
    sound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)
}

document.addEventListener("keydown", function(event){
    sound(event.key);
    buttonAnimation(event.key);
})

function sound(char){
    switch (char) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var audio1 = new Audio("sounds/tom-4.mp3");
            audio1.play();
            break;
        case "j":
            var audio2 = new Audio("sounds/kick-bass.mp3");
            audio2.play();
            break;
        case "k":
            var audio3 = new Audio("sounds/snare.mp3");
            audio3.play();
            break;
        case "l":
            var audio4 = new Audio("sounds/crash.mp3");
            audio4.play();
            break;
        default:
            break;
    }

}

function buttonAnimation(currentkey){

    var activebutton = document.querySelector("."+currentkey);

    activebutton.classList.add("pressed");

    setTimeout(function(){activebutton.classList.remove("pressed");},100)

}


