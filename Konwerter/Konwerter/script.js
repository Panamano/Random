const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
let fahrenheit;
let celsius;

const changeTemp = () => {
  if (one.innerText === "°C") {
    one.innerText = "°F";
    two.innerText = "°C";
  } else {
    one.innerText = "°C";
    two.innerText = "°F";
  }
};

const convert = () => {
  if (one.innerText === "°C") {
    celsius = converter.value * 1;
    fahrenheit = celsius * 1.8 + 32;
    result.innerText = `${celsius} °C to ${fahrenheit.toFixed(1)} °F`;
  } else {
    fahrenheit = converter.value * 1;
    celsius = (fahrenheit - 32) / 1.8;
    result.innerText = `${fahrenheit} °F to ${celsius.toFixed(1)} °C`;
  }
};

const resetFun = () => {
  result.innerText = "";
  converter.value = "";
  one.innerText = "°C";
  two.innerText = "°F";
};

resetBtn.addEventListener("click", resetFun);
changeBtn.addEventListener("click", changeTemp);
convBtn.addEventListener("click", convert);
