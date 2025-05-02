const button = document.querySelector('button')
const bgE1 = document.querySelector('section')

button.addEventListener('click',() => {
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    bgE1.style.backgroundColor = color;
    console.log(color)
})

let click = 0;

function clickon(){
    click ++;
    if(
        click < 4
    ){
        let Button = document.getElementById(button);
        button.style.width = (100+click*100)+"px";
        button.style.height = (75+click*80)+"px";
        button.style.fontSize = (20+click*20)+"px";
    }
}
