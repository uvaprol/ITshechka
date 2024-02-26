const imgs = document.getElementsByTagName('img')
for (img in imgs){
    imgs[img].ondragstart = function() { return false; };
}


document.getElementById("tel").addEventListener("keypress", function(event) {
    let charCode = event.keyCode;
    if ((charCode != 32 && charCode != 40 && charCode != 41  && charCode != 43 && charCode != 45) && (charCode < 48 || charCode > 57)){
      event.preventDefault();
    }
  });