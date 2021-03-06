// Zadanie 0
const distFromAvarage = (arr) => {
    let avg = 0;
    let sum = 0;
    arr.forEach(item => {
        sum += item;
    })

    avg = sum / arr.length;

    let newArr = [];

    arr.forEach(item => {
        newArr.push(item - avg);
    })

    console.log(newArr);
    return newArr;
}


distFromAvarage([1,2,3,4,5,6,7])

// Zadanie 1
var favoriteFruits = [
    'Apple',
    'Kiwi',
    'Banana',
    'Mango'
];

console.log('First element: ',favoriteFruits[0]);
console.log('Last element: ',favoriteFruits[favoriteFruits.length - 1])
favoriteFruits.forEach(item => {
    console.log('Element ', item);
})

// Zadanie 3
const printTable = (arr) => {
    for(var i = 0; i < arr.length; i++){
        console.log(`Item ${i} - ${arr[i]}`);
    }
}

printTable([1, 2, 3, 4, 5]);

// Zadanie 4
const multiply = (arr) => {
    let result = 1;
    for(var i = 0; i < arr.length; i++){
        result *= arr[i];
    }
    return result;
}

multiply([1,2,3,4,5,6,7]);

// Zadanie 5
const getEvenAvarage = (arr) => {
    let sum = 0;
    let newArr = [];
    arr.forEach(item => {
        if(item % 2 == 0) newArr.push(item);
    });
    newArr.forEach(item => {
        sum += item;
    })
    if(newArr.length == 0) return null;
    else return sum / newArr.length;
}

getEvenAvarage([1,1,1,1])

// Zadanie 6
const sortArray = (arr) => {
    return arr.sort((a,b) => {return a-b;});
}

sortArray([145,11,3,64,4,6,10])

// Zadanie 7
const addArrays = (arrA, arrB) => {
    let newArr = [];
    if(arrA.length > arrB.length){
        for(let i = 0; i < arrA.length; i++){
            if(i >= arrB.length) newArr.push(arrA[i]);
            else newArr.push(arrA[i] + arrB[i]);
        }
    } else {
        for(let i = 0; i < arrB.length; i++){
            if(i >= arrA.length) newArr.push(arrB[i]);
            else newArr.push(arrA[i] + arrB[i]);
        }
    }
    return newArr;
}

addArrays([4,0,1,3,4], [1,9,6,7,8,17]);
addArrays([8,3,22], [1,3,2]);
addArrays([2,3,1,5,3,5], [3,1,76,1]);