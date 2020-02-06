 // Wywołanie funkcji działa zarówno przed jak i po jej deklaracji
sayHi()

function sayHi(){
    console.log(`Cześć`)
}

sayHi()

// Wywołanie wyrażenia funkcyjnego działa jedynie po jej deklaracji
sayHello

let sayHello = function(){
    console.log(`Witaj`)
}

sayHello