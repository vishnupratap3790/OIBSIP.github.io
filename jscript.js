let displayValue = '0';
function updateFunctionToDisplay() {

document.getElementById('display').innerText = displayValue;
}

function clearFunctionToDisplay() {
  displayValue = '0';
  updateFunctionToDisplay();
}

function appenddFunctionToDisplayData(value) {
  if (displayValue === '0' || displayValue==='Error') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateFunctionToDisplay();
}

function calculateFunction(){
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateFunctionToDisplay();
}

function handleKeyPress(event) {
  const key = event.key;
  const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '%','(', ')','=', 'Enter'];

  if (validKeys.includes(key)) {
    if (key === 'Enter' || key==='=') {
      calculateFunction();
    } else {
      appenddFunctionToDisplayData(key);
    }
  }
}
document.addEventListener('keypress', handleKeyPress);

updateFunctionToDisplay();
