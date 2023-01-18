const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

window.addEventListener('load', startGame);
window.addEventListener('resize', startGame);

function startGame(){

    setCanvasSize();
  
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);   

    console.log({canvasSize, elementsSize })
    
    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';

    for (let i = 1; i <= 10; i++) {
        game.fillText(emojis['X'], elementsSize , elementsSize * i);
        
    }

    function setCanvasSize(){
        

        if(window.innerHeight > window.innerWidth){
            canvasSize = window.innerWidth * 0.8;
        }else {
            canvasSize = window.innerHeight * 0.8;
        }
    }


    
  // window.innerHeight
  // window.innerWidth
  
  // game.fillRect(0,50,100,100);
  // game.clearRect(50,50,50,50);
  // game.clearRect()
  // game.clearRect(0,0,50,50);

  // game.font = '25px Verdana'
  // game.fillStyle = 'purple';
  // game.textAlign = 'center';
  // game.fillText('Platzi', 25, 25);
}