document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // Zadanie 0

    function getDataInfo(elements){
        let newArr = []
        for(let i = 0;i < elements.length; i++){
            newArr.push(elements[i].dataset)
        }
        return newArr
    }

    console.log(getDataInfo(links))

    // Zadanie 1
    console.log(homeElement)
    console.log(childElements)
    for(let i = 0; i < childElements.length; i++){
        console.log('Element' + childElements[i])
        console.log('TagName: ' + childElements[i].tagName)
        console.log('ClassList: ' + childElements[i].classList.value)
        console.log('\n')
    }
    console.log(banner)
    console.log(blocks)
    for(let i = 0; i < blocks.length; i++){
        console.log('Element' + blocks[i])
        console.log('TagName: ' + blocks[i].tagName)
        console.log('ClassList: ' + blocks[i].classList.value)
        console.log('\n')
    }
    console.log(links)
    for(let i = 0; i < links.length; i++){
        console.log('Element' + links[i])
        console.log('TagName: ' + links[i].tagName)
        console.log('ClassList: ' + links[i].classList.value)
        console.log('\n')
    }

    // Zadanie 2
    for(let i = 0; i < blocks.length; i++){
        console.log(blocks[i].innerHTML)
        console.log(blocks[i].outerHTML)
        blocks[i].innerHTML = 'Nowa wartość diva o klasie blocks'
    }

    // Zadanie 3
    let mainFooter = document.getElementById('mainFooter')
    function getId(element){
        return element.getAttribute('id')
    }
    console.log(getId(mainFooter))

    // Zadanie 4
    function getTags(elements){
        let newArr = []
        for(let i = 0; i < elements.length; i++){
            newArr.push(elements[i].tagName)
        }
        return newArr
    }
    console.log(getTags(childElements))

    // Zadanie 5
    function getClassInfo(element){
        return Array.from(element.classList)
    }
    console.log(getClassInfo(banner))

    // Zadanie 6
    let liNav = document.querySelectorAll('nav li')
    function setDataDirection(elements){
        for(let i = 0; i < elements.length; i++){
            if(elements[i].dataset.direction == null)
                elements[i].dataset.direction = "top"
        }
    }
    setDataDirection(liNav)

});
