/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


// Deklaracja funkcji jeden()
function jeden() {

    // Deklaracja zmiennej lokalnej "zmienna1", jest ona dostępna wewnątrz całej funkcji jeden() 
    var zmienna1 = 1;

    // Deklaracja funkcji dwa
    function dwa() {

        // Wyświetlenie wartości zmiennej "zmienna1", w konsoli wypisana zostanie wartość zmiennej ponieważ jest ona dostępna z poziomu funkcji dwa()
        console.log(zmienna1);

        // Deklaracja zmiennej lokalnej "zmienna2" dostępnej wewnątrz funkcji dwa()
        var zmienna2 = 3;
    }

    // Wywołanie funkcji dwa()
    dwa();

    // Wyświetlenie wartości zmiennej "zmienna2", w konsoli pojawi się błąd gdyż w kontekście funkcji jeden() zmienna "zmienna2" nie została zadeklarowana
    console.log(zmienna2)
}

// Wywołanie funkcji jeden()
jeden()