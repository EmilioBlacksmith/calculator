// Calculator System
let lastNumber = '';
let currentOperation = '';
let newNumber = '0';
let dotAdded = false;

// Screen System

const ScreenNewNumber = document.querySelector('.current');

// Buttons Number & Operations
const Operations = document.querySelectorAll('#operation');
const Numbers = document.querySelectorAll('#number');

document.addEventListener('keydown', handleKeyboardInput);

Operations.forEach(operation => {
  operation.addEventListener('click', () =>{
    makeOperation(operation.dataset.key.toString());
  });
});

Numbers.forEach(num => {
  num.addEventListener('click', () => {
    appendNewNumber(num.dataset.key);
  });
});

function appendNewNumber(number){
  if(newNumber === '0'){
    if(number === '0'){
      
    }else{
      newNumber = number.toString();
    }
  }else{
    newNumber += number.toString();
  }
  //console.log(newNumber);
  showCurrentNumberOnScreen(newNumber);
}

function showCurrentNumberOnScreen(){
  ScreenNewNumber.innerText = newNumber;
}

function makeOperation(operation){
  switch(operation){
    case 'AC':
      newNumber = '0';
      lastNumber = '';
      currentOperation = '';
      showCurrentNumberOnScreen();
      break;
    case 'C':
      newNumber = newNumber.slice(0, -1);
      if(newNumber === ''){
        newNumber = '0';
      }
      showCurrentNumberOnScreen();
      break;
    default:
      console.log("lol");
      break;
  }
}

function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNewNumber(e.key)
  if (e.key === '.') /*appendPoint()*/
  if (e.key === '=' || e.key === 'Enter') //evaluate()
  if (e.key === 'Backspace') //deleteNumber()
  if (e.key === 'Escape') //clear()
  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
    //setOperation(convertOperator(e.key))
  ;
}


//#region Calculator Rotation
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

//#endregion