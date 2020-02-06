document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     let ex5 = document.querySelectorAll('.ex5 li')
     for(let i = 0; i < ex5.length; i++){
         if(i % 2 == 0) ex5[i].style.backgroundColor = 'green'
         ex5[4].classList.add('big')
         if(i % 3 == 0) ex5[i].style.textDecoration = 'underline'
     }

     let chrome = document.querySelector('.ex1 .chrome')
     let firefox = document.querySelector('.ex1 .firefox')
     let edge = document.querySelector('.ex1 .edge')

     edge.style.backgroundImage = "url('./assets/img/edge.png')"
     firefox.style.backgroundImage = "url('./assets/img/firefox.png')"
     chrome.style.backgroundRepeat = 'no-repeat'
     chrome.style.width = '100px'
     chrome.nextElementSibling.innerHTML = 'Google Chrome'
     chrome.nextElementSibling.setAttribute('href', 'http://chrome.com')
     firefox.nextElementSibling.innerHTML = 'Mozilla Firefox'
     firefox.nextElementSibling.setAttribute('href', 'http://firefox.com')
     edge.nextElementSibling.setAttribute('href', 'http://egde.com')
});