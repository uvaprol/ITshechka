const btn = document.getElementById('up')
let timerId = setTimeout(()=>{btn.style.display = 'none'}, 500)
window.onwheel = (e) =>{
    if (e.deltaY < 0){
        btn.style.animation = 'visible 1.5s forwards'
        clearTimeout(timerId)
        btn.style.display = 'block'
    } else{
        btn.style.animation = 'unvisible 1.5s forwards'
        timerId = setTimeout(()=>{btn.style.display = 'none'}, 500)
    }
}
