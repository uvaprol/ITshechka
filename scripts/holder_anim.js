const name_label = document.getElementById('name_label')
const tel_label = document.getElementById('tel_label')
const name_input= document.getElementById('name')
const tel_input = document.getElementById('tel')
function holder_anim(input, el, move){
    if (input.value == ''){
        el.style.animation = `${move} 0.5s forwards`
    }
}


