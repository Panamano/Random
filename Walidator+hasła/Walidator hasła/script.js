const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;
const pText = p.textContent;
console.log(pText);
const showMsg = () => {
    if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)&& pass.value.match(special)){
        p.textContent = 'Masz super hasło 😊';
        p.style.color = 'lime';
    }else if(pass.value.length > minValue && pass.value.match(letters)&& pass.value.match(numbers)) {
        p.textContent = 'Masz super hasło';
        p.style.color = 'yellow';
    }else if(pass.value.length <= minValue){
        p.textContent = 'Hasło ma za mało znaków';
        p.style.color = 'red';
    }
}

const clearMsg = () => {
    if(pass.value !== ''){
showMsg()
    }else{
        p.textContent = `${pText}`;
        p.style.color = '';
    }
    
}

pass.addEventListener('keyup', clearMsg)