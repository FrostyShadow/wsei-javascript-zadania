document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    // Zadanie 0
    let title = document.querySelector('.title');
    function getDataAnimation(element){
        let data = element.getAttribute('data-animation')
        return data;
    }
    console.log(getDataAnimation(title));

    // Zadanie 1
    let home1 = document.getElementById('home');
    let home2 = document.querySelector('#home');
    let li = document.querySelector('li[data-direction]');
    let block = document.querySelector('.block');

    console.log(home1)
    console.log(home2)
    console.log(li)
    console.log(block)

    // Zadanie 2
    let liNav = document.querySelectorAll('nav li')
    let paragraphs = document.querySelectorAll('div p')
    let divArticle = document.querySelectorAll('article div')

    console.log(liNav)
    console.log(paragraphs)
    console.log(divArticle)

    // Zadanie 3
    let articleFirst = document.querySelector('article.first')
    console.log(articleFirst)
    console.log(articleFirst.querySelectorAll('h1').length)

});
