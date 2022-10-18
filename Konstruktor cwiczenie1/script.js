// const btn1 = document.querySelector(".btn-1");
// const btn2 = document.querySelector(".btn-2");
// const btn3 = document.querySelector(".btn-3");
// const p = document.querySelector("p");

// function Food(name, price) {
//   this.name = name;
//   this.price = price;
// }

// const meal = new Food("schabowy", 29);
// const meal2 = new Food("pizza", 25);
// const meal3 = new Food("zupa", 8);

// Food.prototype.showInfo = function () {
//   console.log(`${this.name} kosztuje ${this.price}zł`);
// };
// // meal.showInfo()

// btn1.addEventListener("click", () => meal.showInfo());
// btn2.addEventListener("click", () => meal2.showInfo());
// btn3.addEventListener("click", () => meal3.showInfo());
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHi = function () {
  console.log(`Cześć, jestem ${this.name}.`);
};

Person.prototype.showAge = function () {
  console.log(`Mam ${this.age} lat/a.`);
};

const person1 = new Person("Maciek", 34);
person1.sayHi();
person1.showAge();

// ===================

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Cześć, jestem ${this.name}.`);
  }
  showAge() {
    console.log(`Mam ${this.age} lat/a.`);
  }
}


const pers = new Person2('Wojtek', 83);
pers.sayHi();
pers.showAge();