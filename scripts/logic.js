// Variables

let currentNum = '0';
let lastNum = '0';
let operator = '';
let canAddDot = true;

const currentValue = document.querySelector('.current');
const operation = document.querySelector('.operation');

currentValue.innerText = currentNum;

// Keyboard Handling
document.addEventListener('keydown', (event) => {
    if(event.key >= 0 && event.key <= 9){
        addNumberCurrent(event.key);
    }
    if(event.key == '-') console.log("minus");
    if(event.key == '/') console.log("divide");
    if(event.key == '+') console.log("plus");
    if(event.key == '*' || event.key == 'x') console.log("multiply");
    if(event.key == '=') console.log("equals");
    if(event.key == 'Backspace') console.log('erase');
    if(event.key == 'Enter') console.log('equals');
    if(event.key == '%') console.log('module operation');
    if(event.key == '^') console.log('Pow');
    if(event.key == '.') appendPoint();
});

// Screen Operations

function addNumberCurrent(newNum){
    let newNumber = parseInt(newNum);

    if(currentNum == '0'){
        currentNum = '';
    }

    if(newNum == '.' && canAddDot == true){
        currentNum += '.'
        canAddDot = false;
    }
    
    if(newNumber => 0 || newNumber <= 9){
        currentNum += newNum;
    }
    currentValue.innerText = currentNum;
}

// Append Operations



// Rotate Calculator with mouse position
let constrain = 800;
let mouseOverContainer = document.getElementById("ex1");
let ex1Layer = document.getElementById("ex1-layer");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;
  
  return "perspective(100px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer, position);
  });
};