// Calculator System
let lastNumber = '';
let currentOperation = '';
let newNumber = '0';
let dotAdded = false;

// Screen System

const ScreenNewNumber = document.querySelector('.current');
const ScreenLastNumber = document.querySelector('.operation');

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
  ScreenLastNumber.innerText = lastNumber + currentOperation;
}

function makeOperation(operation){
  switch(operation){
    case 'AC':
      newNumber = '0';
      lastNumber = '';
      currentOperation = '';
      dotAdded = false;
      showCurrentNumberOnScreen();
      break;
    case 'C':
      let lastChar = newNumber.slice(-1);
      newNumber = newNumber.slice(0, -1);
      if(newNumber === ''){
        newNumber = '0';
      }

      if(lastChar === '.')  dotAdded = false;
      showCurrentNumberOnScreen();
      break;
    case '.':
      if(!dotAdded){
        newNumber += '.';
        dotAdded = true;
        showCurrentNumberOnScreen();
      }
      break;
    case '^':
      if(lastNumber !== ''){
        QuickOperationPower();
      }else{
        currentOperation = '^';
        lastNumber = newNumber;
        newNumber = '0';
        showCurrentNumberOnScreen();
      }
      break;
    case '%':
      if(lastNumber !== ''){
        QuickOperationPercentage();
      }else{
        currentOperation = '%';
        lastNumber = newNumber;
        newNumber = '0';
        showCurrentNumberOnScreen();
      }
      break;
    case '=':
      OperationEqual();
      break;
    case '/':
      if(lastNumber !== ''){
        QuickOperationDivision();
      }else{
        currentOperation = '/';
        lastNumber = newNumber;
        newNumber = '0';
        showCurrentNumberOnScreen();
      }
      break;
    case '*':
      if(lastNumber !== ''){
        QuickOperationMultiply();
      }else{
        currentOperation = '*';
        lastNumber = newNumber;
        newNumber = '0';
        showCurrentNumberOnScreen();
      }
      break;
    case '-':
      if(lastNumber !== ''){
        QuickOperationMinus();
      }else{
        currentOperation = '-';
        lastNumber = newNumber;
        newNumber = '0';
        showCurrentNumberOnScreen();
      }
      break;
    case '+':
      if(lastNumber !== ''){
        QuickOperationPlus();
      }else{
        currentOperation = '+';
        lastNumber = newNumber;
        newNumber = '0';
        showCurrentNumberOnScreen();
      }
      break;
    default:
      break;
  }
}

//#region Operations

function OperationPower(){
  let newNum = newNumber;
  let lastNum = lastNumber;
  newNumber = parseFloat(lastNum) ** parseFloat(newNum);
  lastNumber = '';
  currentOperation = '';
  showCurrentNumberOnScreen();
}

function OperationPercentage(){
  let newNum = newNumber;
  let lastNum = lastNumber;
  newNumber = parseFloat(lastNum) % parseFloat(newNum);
  lastNumber = '';
  currentOperation = '';
  showCurrentNumberOnScreen();
}

function OperationDivision(){
  let newNum = newNumber;
  let lastNum = lastNumber;
  newNumber = parseFloat(lastNum) / parseFloat(newNum);
  lastNumber = '';
  currentOperation = '';
  showCurrentNumberOnScreen();
}

function OperationMultiply(){
  let newNum = newNumber;
  let lastNum = lastNumber;
  newNumber = parseFloat(lastNum) * parseFloat(newNum);
  lastNumber = '';
  currentOperation = '';
  showCurrentNumberOnScreen();
}

function OperationMinus(){
  let newNum = newNumber;
  let lastNum = lastNumber;
  newNumber = parseFloat(lastNum) - parseFloat(newNum);
  lastNumber = '';
  currentOperation = '';
  showCurrentNumberOnScreen();
}

function OperationPlus(){
  let newNum = newNumber;
  let lastNum = lastNumber;
  newNumber = parseFloat(lastNum) + parseFloat(newNum);
  lastNumber = '';
  currentOperation = '';
  showCurrentNumberOnScreen();
}

function OperationEqual(){
  switch(currentOperation){
    case '^':
      OperationPower();
      break;
    case '%':
      OperationPercentage();
      break;
    case '/':
      OperationDivision();
      break;
    case '*':
      OperationMultiply();
      break;
    case '-':
      OperationMinus();
      break;
    case '+':
      OperationPlus();
      break;
    default:
      break;
  }
}
//#endregion

//#region Quick Operations

function QuickOperationPower(){
  let newNum = newNumber;
  let lastNum = lastNumber;
  lastNumber = parseFloat(lastNum) ** parseFloat(newNum);
  currentOperation = '^';
  newNumber = '0';
  showCurrentNumberOnScreen();
}

function QuickOperationPercentage(){
  let newNum = newNumber;
  let lastNum = lastNumber;
  lastNumber = parseFloat(lastNum) % parseFloat(newNum);
  currentOperation = '%';
  newNumber = '0';
  showCurrentNumberOnScreen();
}

function QuickOperationDivision(){
  let newNum = newNumber;
  let lastNum = lastNumber;
  lastNumber = parseFloat(lastNum) / parseFloat(newNum);
  currentOperation = '/';
  newNumber = '0';
  showCurrentNumberOnScreen();
}

function QuickOperationMultiply(){
  let newNum = newNumber;
  let lastNum = lastNumber;
  lastNumber = parseFloat(lastNum) * parseFloat(newNum);
  currentOperation = '*';
  newNumber = '0';
  showCurrentNumberOnScreen();
}

function QuickOperationMinus(){
  let newNum = newNumber;
  let lastNum = lastNumber;
  lastNumber = parseFloat(lastNum) - parseFloat(newNum);
  currentOperation = '-';
  newNumber = '0';
  showCurrentNumberOnScreen();
}

function QuickOperationPlus(){
  let newNum = newNumber;
  let lastNum = lastNumber;
  lastNumber = parseFloat(lastNum) + parseFloat(newNum);
  currentOperation = '+';
  newNumber = '0';
  showCurrentNumberOnScreen();
}
//#endregion

function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNewNumber(e.key)
  if (e.key === '.') makeOperation('.');
  if (e.key === '=' || e.key === 'Enter') makeOperation('=');
  if (e.key === 'Backspace') makeOperation('C')
  if (e.key === 'Escape') makeOperation('AC');
  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '%' || e.key === '^')
    makeOperation(e.key);
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