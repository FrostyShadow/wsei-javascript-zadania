// Zadanie 1
function countHello(counter){
    var counterLimiter = 1;    
        var interval = setInterval(() => {
            if(counterLimiter == counter){
                clearInterval(interval);
            }
            console.log("Hello ", counterLimiter);
            counterLimiter++;
        }, 500);
}

countHello(5);