let evaluated = false;
let operators = ["-","+", "/", "*",".", "00"];
let operatorsWihoutMinus = operators.slice(1);

// if operator is the last character and user wants to change it this function change this operator instead of add another one. it must works before and after equal that is why it is called 2 times
function handleLastOperator (lastChar, id, currentValue) {
  if (operators.includes(lastChar) && operators.includes(id) && id != lastChar){
       document.calc.result.value = currentValue.slice(0, currentValue.length-1) + id;
      } else {
        document.calc.result.value+=id;
      }
} 

function myFunction(id) {
  //does not allow to display an operator as first character (not applicable to minus)
  if (document.calc.result.value === "" && operatorsWihoutMinus.includes(id)){
    return;
  } 
  
  let currentValue = document.calc.result.value;
  let lastChar = currentValue.substr(currentValue.length - 1);
  
  //does not allow to add two the same operators next to each other
  if (operators.includes(lastChar) && operators.includes(id) && id === lastChar) {
   return;
  }
  
  // after equal if user wants to start a new equation and enter a new NUMBER function clear the screen and show this new number
  if (evaluated) {
    if (!operators.includes(id)) {
      evaluated = false;
      document.calc.result.value="";
      document.calc.result.value+=id;
    } 
    // after equal if user wants to enter a new OPERATOR function display this operator on the screen next to the result of the old equation and make a new one
    else {
      evaluated = false;
      handleLastOperator(lastChar, id, currentValue);
    }
  } else {
   handleLastOperator(lastChar, id, currentValue);   
  }
}
// clear screen
function clearAll() {
  document.calc.result.value="";
}

function calculate (id) {
try {
  let currentValue = document.calc.result.value;
  let lastChar = currentValue.substr(currentValue.length - 1);
  
  //if operator is the last character then it will be delete after enter equal
  if (operators.includes(lastChar)) {
    document.calc.result.value = currentValue.substr(0, currentValue.length-1);
  } 
  // eval calculate all, evalueated is true so we can start a new operation
  let myResult = eval(document.calc.result.value);
  document.calc.result.value = myResult;
  evaluated = true;
} 
  // if try does not work then catch display error
  catch(err){
      document.calc.result.value="Error";
    }
} 