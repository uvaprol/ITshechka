const btn_down = document.getElementById('btn_down')
function button_animation_down(){
    let step = 1
    for (let i = 41; i <= 50; i++){
        setTimeout(()=>  btn_down.style.bottom = `${i}px`,  (step) * 40)
        // console.log(step)
        step ++ 
    }
    for (let i = 50; i >= 35; i--){
        setTimeout(()=>  btn_down.style.bottom = `${i}px`,  (step) * 40)
        // console.log(step)
        step ++ 
    }
    let hide = 100
    for (let i = 34; i >= 25; i--){
        setTimeout(()=>{
            btn_down.style.bottom = `${i}px`;
            hide -= 10;
            btn_down.style.backgroundColor = `rgb(143, 143, 143, ${hide/100})`;
        },(step) * 40 )
        // console.log(step)
        step ++ 
    }
    button_animation_up(step)


}
function button_animation_up(step){

    let hide = 0
    for (let i = 26; i <= 35; i++){
        setTimeout(()=>{
            btn_down.style.bottom = `${i}px`;
            hide += 10;
            btn_down.style.backgroundColor = `rgb(143, 143, 143, ${hide/100})`;
        },(step) * 40 )
        // console.log(step)
        step ++     
    }
    for (let i = 36; i <= 40; i++){
        setTimeout(()=>{
            btn_down.style.bottom = `${i}px`;
            hide += 10;
            btn_down.style.backgroundColor = `rgb(143, 143, 143, ${hide/100})`;
        },(step) * 40 )
        // console.log(step)
        step ++         
    }
    setTimeout(button_animation_down, 5000)
}
setTimeout(button_animation_down, 2000)