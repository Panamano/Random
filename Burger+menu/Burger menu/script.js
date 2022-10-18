const burgerBtn = document.querySelector('.burger')
const barsIco = document.querySelector('.fa-bars')
const xIco = document.querySelector('.fa-times')
const nav = document.querySelector('ul')
const a = document.querySelectorAll('a')

const openMenu = () => {
 barsIco.classList.toggle('hide');
 xIco.classList.toggle('hide');
 nav.classList.toggle('active')
 burgerBtn.classList.toggle('active')
}
console.log(a);
burgerBtn.addEventListener('click', openMenu);
a.forEach(x => x.addEventListener('click', openMenu))