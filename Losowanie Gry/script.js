const input = document.querySelector("input");
const addBtn = document.querySelector(".dodaj");
const ul = document.querySelector(".ul");
const pickBtn = document.querySelector(".losuj");
const result = document.querySelector(".wynik");

const liText = document.getElementsByTagName("li").textContent;
const tablica = [];
console.log(typeof tablica);
addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const text = input.value;

    if(text) {
        const createLi = document.createElement("li");
        createLi.textContent = text;
        ul.append(createLi);
        input.value ='';
        tablica.push(text);
    }
})

console.log(tablica);
const opcje = tablica.map(x=>x);
console.log(typeof tablica);
// console.log(opcje);
// let number = Math.floor(Math.random() * 10);
// console.log(number);
// // const pick = () => {
// //      result.textContent = opcje[number];
// // }
// // pickBtn.addEventListener('click', console.log(number))