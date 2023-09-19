let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function(){
    body.classList.toggle('open');
})

//Copier un texte


function copyText(elementId) {
    const textElement = document.getElementById(elementId);
    const textToCopy = textElement.textContent;

    const tempElement = document.createElement('textarea');
    tempElement.value = textToCopy;
    document.body.appendChild(tempElement);
    tempElement.select();

    document.execCommand('copy');

    document.body.removeChild(tempElement);
  }

