
const textbox = document.getElementById("mytextbox");
const toFahrenheit = document.getElementById("toFarenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert () {
  if (toFahrenheit.checked) {
    result.textContent = (TOFARENHEIT(Number(textbox.value)))+"°F"
    
  }
  else if (toCelsius.checked) {
    result.textContent = TOCELSIUS(Number(textbox.value))+"°"

  }
  else {
    result.textContent = "ERROR! Please select a unit of conversion"
  }
}

function TOFARENHEIT (incelsius) {
  incelsius = incelsius* 9/5 + 32
  return Math.ceil(incelsius)
}

function TOCELSIUS (inFarenheit) {
  inFarenheit = (inFarenheit-32)*5/9
  return inFarenheit
}

