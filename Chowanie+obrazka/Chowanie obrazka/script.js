const arrrowBtn = document.querySelector('.arrow');
const arrowIcon = document.querySelector('.fas');
const img = document.querySelector('.item1');

const hideImg = () => {
    img.classList.toggle('hide')

if (img.classList.contains('hide')) {
    arrowIcon.style.transform = 'rotate(180deg)'
}else{
    arrowIcon.style.transform = 'rotate(0)'
}
}
arrrowBtn.addEventListener('click', hideImg);
