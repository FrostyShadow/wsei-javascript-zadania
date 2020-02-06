
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

// Deklaracja funkcji sortArray()
function sortArray() {

    // Deklaracja array "points"
    var points = [41, 3, 6, 1, 114, 54, 64];

    // Metoda sort służąca do sortowania zawartości array
    points.sort(function (a, b) {
        // Różnica a - b powoduje, że porównanie elementów tablicy działa na liczbach, a nie na stringach
        return a - b;
    });

    // Return tablicy w formie posortowanej od najmniejszych do największych
    return points;
}

// Wywowałeni funkcji sortArray()
sortArray();
