document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // Zadanie 0
    let ex5 = document.querySelectorAll('.ex5 li')
    for (let i = 0; i < ex5.length; i++) {
        if (i % 2 == 0) ex5[i].style.backgroundColor = 'green'
        ex5[4].classList.add('big')
        if (i % 3 == 0) ex5[i].style.textDecoration = 'underline'
    }

    // Zadanie 1
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

    // Zadanie 2
    let name = document.getElementById('name')
    let favColor = document.getElementById('fav_color')
    let favMeal = document.getElementById('fav_meal')

    name.innerHTML = 'Filip Kosmala'
    favColor.innerHTML = 'Blue'
    favMeal.innerHTML = 'Pizza'

    // Zadanie 3
    let menu = document.querySelector('.ex3 ul')
    let menuElement = document.querySelectorAll('.ex3 li')
    let error = document.querySelectorAll('.ex3 .error')
    console.log(menu)
    console.log(menuElement)
    console.log(error)
    menu.classList.add('menu')
    for(let i = 0; i < menuElement.length; i++){
        menuElement[i].classList.add('menuElement')
    }
    for(let i = 0; i < error.length; i++){
        error[i].classList.remove('error')
    }

});