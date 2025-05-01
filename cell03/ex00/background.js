const button = document.querySelector('button')
const bgE1 = document.querySelector('section')

button.addEventListener('click',() => {
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    bgE1.style.backgroundColor = color;
    console.log(color)
})