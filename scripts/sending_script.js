const token = ''; // your token
const chatId = ''; // your ID chat
const name = document.getElementById('name')
const tel = document.getElementById('tel')
const name_check = document.getElementById('name_check')
const tel_check = document.getElementById('tel_check')
function valid(){
    tel_check.textContent = 'Поле обязательно для заполнения'
    if (name.value == ''){
        name_check.style.opacity = '1'
    }
    else{
        name_check.style.opacity = '0'
    }
    if (tel.value == ''){
        tel_check.style.opacity = '1'
    }
    else{
        tel_check.style.opacity = '0'
    }
    if (name.value != '' && tel.value != ''){
        let telnumber = parseInt(tel.value.replace(/[^\d]/g, ''))
        if (String(telnumber).length >= 11){
            let message = `${name.value}\n${tel.value}`
            name_check.style.opacity = '0'
            tel_check.style.opacity = '0'
            send(message)
        }
        else{
            tel_check.style.opacity = '1'
            tel_check.textContent = 'Не коректные данные'
        }
    }
}
function send(message){ 
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`; 
    fetch(url) 
      .then(response => response.text()) 
      .then(data => { 
        console.log('Message sent successfully'); 
        name.value = '' 
        tel.value = '' 
      }) 
      .catch(error => { 
        console.error('Error sending message:', error); 
      }); 
}

