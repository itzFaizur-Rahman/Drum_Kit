for(var i = 0; i<=6 ; i++){
document.querySelectorAll('button')[i].addEventListener('click', message);
}
function message() {
  makeSound(this.innerHTML);
  animation(this.innerHTML)
};

document.addEventListener("keypress",keyAction);
function keyAction(event){
    makeSound(event.key);
    animation(event.key);
}

function makeSound(key){
    switch(key){
        case("w"):
        var tom1 = new Audio ('tom-1.mp3');
        tom1.play();
        break;
        case("a"):
        var tom2 = new Audio ('tom-2.mp3');
        tom2.play();
        break;
        case("s"):
        var tom3 = new Audio ('tom-3.mp3');
        tom3.play();
        break;
        case("d"):
        var tom4 = new Audio ('tom-4.mp3');
        tom4.play();
        break;
        case("j"):
        var snare = new Audio ('snare.mp3');
        snare.play();
        break;
        case("k"):
        var crash = new Audio ('crash.mp3');
        crash.play();
        break;
        case("l"):
        var kick= new Audio ('kick-bass.mp3');
        kick.play();
        break;
        default:
        alert("Wrong button.");
        break;
       }
}

function animation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}