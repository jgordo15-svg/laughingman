const SQUARE_COUNT = 3;
const TIMERSPEED = 10;
const SPEED = 2;
const firstsquare = document.querySelector("#square");

firstSquare.style.left = "250px";
firstSquare.style.top = "170px";

firstSquare.addEventListener("click", () => {
    alert("OMG YOU CLICKED ME");

});
let box = document.querySelector("#box");
for(let i = 0; i < SQUARE_COUNT; i++) {
    let square = document.createElement("img");
    square.src = "laughing_man.jpg";
    square.alt = "Catch the Laughing man";
    square.className = "square";
    square.style.left = "225px";
    square.style.top = "175px";
    box.appendChild(square);
}

Array.from(box.chidren).forEach(element => {
    
     let dx = SPEED*(Math.random()*2-1);
    let dy = SPEED*(Math.random()*2-1);
    let x = parseInt(element.style.left);
    let y = parseInt(element.style.top);
    setInterval(()=> {
      if(x<0 || x >= 450) {
        dx *=-1; }

        if(y<0 || y >= 350) {
        dy *=-1; }

        x = x+dx;
      y = y+dy;
      element.style.left = x + "px";
      element.style.top = y + "px"; 

    }, TIMERSPEED);

}

);