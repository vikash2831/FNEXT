let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
