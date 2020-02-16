
class Bullet {
  constructor(dad,x,y,w,h){
    this.div = document.createElement("div");
    this.div.classList.add("bullet");
    this.div.style.position = "absolute";
    this.div.style.left = x+"px";
    this.div.style.top = y+"px";
    this.div.style.width = w+"px";
    this.div.style.height = h+"px";
    this.div.style.backgroundColor = "white";
    this.div.style.borderRadius = "50%";
    dad.appendChild(this.div);
    Bullet.allInstances.push(this);

  }

  static loop(){

  //   for (let index = 0; index < Bullet.allInstances.length; index++) {
  //     const element = Bullet.allInstances[index];
  //     console.log(element.div.getClientRects()[0].y);
  //     let newY =  element.div.getClientRects()[0].y - 2;
  //     console.log(newY);
  //     // element.div.style.top = newY + "px";
  //   }
    
  // }

  
}

Bullet.allInstances = [];

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

spaceShip.shot = ()=> {
  const bullet = new Bullet(document.getElementById("game-vp"), spaceShip.x+(spaceShip.width/2)-4, spaceShip.y, 8, 20);
  // console.log(this);
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
  Bullet.loop();
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