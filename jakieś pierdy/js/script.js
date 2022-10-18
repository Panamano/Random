// /*
//     Metody do wykorzystania:
//     charAt()
//     includes()
//     replace()* podchwytliwe 🙂
//     slice()
//     split()
//     toLowerCase()
//     toUpperCase()
// */

// const text1 = 'powiększ mnie!'
// const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
// const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
// const text4 = 'sprawdź, czy zawieram słowo "czy"'
// const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
// const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
// const text7 = 'podziel, ten, string, od, przecinków'

// console.log(text1.toUpperCase());
// console.log(text1.toUpperCase());
// console.log(text1.toUpperCase());
// console.log(text2.toLowerCase());
// console.log(text3.slice(6));
// console.log(text4.includes("czy"));
// console.log(text5.charAt(2));
// console.log(text6.replaceAll('pies', 'kot'));
// console.log(text7.split(","));
// const colors = ['blue', 'black', 'red', 'green', 'yellow', 'cyan'];
// for (let i=0; i<colors.length; i++){
//     console.log(`Ten kolor to ${colors[i].toUpperCase()}`);
// }
/*asdasdasda
asdadsdsd*/
// let x = 20;
// do {
//     console.log(x);
//     x-=3
// } while (x > 0);
// console.log(x);
// const numbers = [5, 8, 10, 23, 48, 60];
// for (number of numbers){
//     x = number / 5;
//     console.log(x);
// }
//  for (number of numbers) {

//     if (number % 2 === 0) {
//         console.log(`%cliczba ${number} jest parzysta`, 'background: green');
//     } else {
//         console.log(`%cliczba ${number} jest nieparzysta`, 'background: red; color: white');
//     }
// }
// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']
// const numbers2 = numbers.slice(0, 2)
// console.log(numbers2)
// const numbers3 = numbers.slice(numbers.length - 3)
// console.log(numbers3)

// const randomStuff = colors.splice(-2)
// console.log(randomStuff)
// console.log(colors.splice(0, 3, 8))
// const newCars = cars.splice(2, 4, 'test')
// console.log(newCars)
// console.log(cars)
// const x = [1, 2, 3, 4, 5]
// const y = ['a', 'b', 'c', 'd']
// const z = [...x, ...y]
// console.log(z);
// const x = [1,5,13,26,48];
// const y = x.map(x => x * 5);
// console.log(y);
// for (z of y) {
//     if (z%2===0) {
//         console.log(`Liczba parzysta: ${z}`);
//     }else {
//         console.log(`%cLiczba nieparzysta: ${z}`, 'color: red');
//     }
// }
// const name = 'Lily'

// const test = () => {
//   const name = 'Lisa'
//   console.log(name);
//   const test2 = () => {
//     const name = 'Lily'
//     console.log(name);
//   }

//   test2()
// }

// test()
// const add = (x,y) => {
//     let result = x + y;

// result % 2 === 0 ?
//     console.log(`Liczba ${result} jest parzysta`)
// :
//     console.log(`Liczba ${result} jest nieparzysta`);

// }
// add (10,24);
// add (343,72)
// let celsius;
// let temp;
// const fahrenheit = (celsius) => {
//     temp = celsius * 1.8 + 32;
//     console.log(`${celsius} celsiusza to ${temp} fehrenheita`);

// }
// fahrenheit(200);
// const num = 10
// let numbers = []
// for (let i = 0; i < num; i++) {
//   numbers.push(i)
// }
// console.log(numbers)
// const podz = (i) => {
//   if (i === 0) {
//     console.log(`${i} to 0`)
//   }
//   if (i % 3 === 0 && i !== 0) {
//     console.log(`${i} podzielna przez 3`)
//   } else if (i !== 0) {
//     console.log(`${i} niepodzielna przez 3 albo rowna 0`)
//   }
// }
// numbers.forEach(podz)
// console.log('.................')
// const newArr = numbers.map(podz)
// console.log(newArr)
// const dupa = numbers.map((x) => x * 4)
// console.log(dupa)
// console.log('...............')
// dupa.forEach(podz)
// const heading = document.querySelector('h1');
// const parag = document.querySelectorAll('p');
// const div = document.querySelector('.test');
// const pDiv = div.querySelector('#test');
// console.log(heading);
// console.log(parag);
// console.log(div);
// console.log(pDiv);
// const createDiv = document.createElement('div');
// const createP = document.createElement('p', 'div');
// div.append(createDiv);
// div.append(createDiv.cloneNode(true));
// div.append(createDiv.cloneNode(true));
// div.append(createP);
// div.appendChild(createP.cloneNode(true));
// const btn = document.querySelector('button');
// btn.innerText = 'dupa';
// btn.innerHTML = '<h2 style = "color: red">gigi</h2>';
// ....................................................
// const createUl = document.createElement('ul');
// const createLi = document.createElement('li');
// // const createLi = document.createElement('li');
// const ul = document.querySelector('ul')
// const li = document.querySelector('li')
// const number = 10;
// document.body.append(createUl);

// for(let i = 1; i <= number; i++){
//     const createLi = document.createElement('li');
//     createLi.textContent = i;
//     createUl.append(createLi)
// }
// const lastLi = createUl.querySelector('li:last-child')
// lastLi.innerText='jestem ostatni';
// lastLi.style.backgroundColor = 'blue';
// lastLi.style.padding = '20px 40px';
// lastLi.style.fontSize = '48px';
// lastLi.style.textAlign = 'center';
const buttons = document.querySelectorAll('button')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const p = document.querySelectorAll('p')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const square = document.querySelector('.square')

btn1.addEventListener('dblclick', () => {
  console.log('cześć')
})

const colorRed = () => {
  square.style.backgroundColor = 'red'
}
const colorBlue = () => {
  square.style.backgroundColor = 'blue'
}
square.addEventListener('mouseover', colorRed)
square.addEventListener('mouseleave', colorBlue)
square.addEventListener('click', () => {
  square.style.backgroundColor = 'gold'
})

const show = () => {
  p1.classList.toggle('show'), p2.classList.toggle('show')
}
btn2.addEventListener('click', show);

