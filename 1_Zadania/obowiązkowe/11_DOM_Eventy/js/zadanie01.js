document.addEventListener("DOMContentLoaded", function () {

    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";

    //Zadanie 1

    //1.1
    // w pliku skryptu próbujemy uzyskać element, gdy nie istnieje on na stronie
    //pierw ładuje się kod javascript, a pozniej HTML


    //1.2
    // event "DOMContentLoaded" "mowi" przegladarce ze musi poczekac 
    //zanim strona zaladuje strona a dopiero pozniej odpalic skrypt

    //1.3 
    //Przeniesieni pliku na dol stromny nic nie zmieni 
    //nasz event "DOMContentLoaded" czeka na strone az sie zaladuje

    
});