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
updateFunctionToDisplay();
