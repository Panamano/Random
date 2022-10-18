const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const color = document.querySelector('.color')
const text = document.querySelector('p')
const textProperty = window.getComputedStyle(text)
console.log(textProperty)
let size = textProperty.getPropertyValue('font-size').slice(-4, -2)
console.log(typeof size)
let sizeN = size * 1
console.log(sizeN)
const randomColor = () => {
  const colorGenerate = Math.floor(Math.random() * 16777215).toString(16)
  text.style.color = `#${colorGenerate}`
}

const plusSize = () => {
  if (sizeN > 50) return
  sizeN += 5
  text.style.fontSize = `${sizeN}px`
}

const minusSize = () => {
  if (sizeN < 20) return
  sizeN -= 5
  text.style.fontSize = `${sizeN}px`
}
color.addEventListener('click', randomColor)
sizeUp.addEventListener('click', plusSize)
sizeDown.addEventListener('click', minusSize)
