const checkArray = (arr) => {
    let checked = [];
    for(let i=0;i<arr.length;i++){
        let check = true;
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]%2!=0) {
                check = false;
                break;
            }
        }
        checked.push(check);
    }
    return checked;
}

var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

for(let i=0;i<task2Array[0].length;i++){
    console.log(task2Array[0][i]);
}

for(let i=0;i<task2Array;i++){
    console.log(task2Array[i].length);
}

for(let i=0;i<task2Array.length;i++){
    for(let j=0;j<task2Array[i].length;j++){
        console.log(task2Array[i][j]);
    }
}


const print2DArray = (arr) => {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            console.log(arr[i][j]);
        }
    }
}

let arr = [[4,4],[25,3],[3,3,3]];
print2DArray(arr);

const create2DArray = (rows, columns) => {
    let newArr = [];
    let item = 1;
    for(let i=0;i<rows;i++){
        let newSubArr = [];
        for(let j=0;j<columns;j++){
            newSubArr.push(item);
            item++;
        }
        newArr.push(newSubArr);
    }
    return newArr;
}

create2DArray(4,4);