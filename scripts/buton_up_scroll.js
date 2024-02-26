const btn = document.getElementById('up')
window.onwheel = (e) =>{
    if (e.deltaY < 0){
        btn.style.display = 'block'
        btn.style.animation = 'visible 1.5s forwards'
    } else{
        btn.style.animation = 'unvisible 1.5s forwards'
    }
}
