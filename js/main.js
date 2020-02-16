
const spaceShip = document.getElementById("space-ship");
// const spaceShip.x = .spaceShip.;

spaceShip.x = spaceShip.getClientRects()[0].x;
spaceShip.y = spaceShip.getClientRects()[0].y;
spaceShip.width = spaceShip.getClientRects()[0].width;
spaceShip.height = spaceShip.getClientRects()[0].height;

spaceShip.changePos = (x,y)=>{
  spaceShip.style.left = x+"px";
  spaceShip.style.top = y+"px";
}





setInterval(() => {
  gameLoop();  
}, 1);

var keyState = {};    
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);    
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);



function gameLoop(){
  // spaceShip.changePos(spaceShip.x,spaceShip.y--)
  // console.log(spaceShip.y);

  if (keyState[38] || keyState[65]){
    spaceShip.changePos(spaceShip.x,spaceShip.y--);
  } else if (keyState[40]){
    spaceShip.changePos(spaceShip.x,spaceShip.y++);
  }

  if (keyState[37]){
    spaceShip.changePos(spaceShip.x--,spaceShip.y);
  } else if (keyState[39]){
    spaceShip.changePos(spaceShip.x++,spaceShip.y);
  }

  if (keyState[32]){
    spaceShip.shot();
  } 
  
}



// x = 100;

// function gameLoop() {
//     if (keyState[37] || keyState[65]){
//         x -= 1;
//     }    
//     if (keyState[39] || keyState[68]){
//         x += 1;
//     }

//     // redraw/reposition your object here
//     // also redraw/animate any objects not controlled by the user

//     setTimeout(gameLoop, 10);
// }    
// gameLoop();

// document.addEventListener("keydown", event => {
//   if (event.isComposing || event.keyCode === 38) {
//     spaceShip.changePos(spaceShip.x,spaceShip.y--);
//   }
//   // do something
// });