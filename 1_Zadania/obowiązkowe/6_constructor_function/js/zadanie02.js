function Calculator(){
    this.operations = [];
}

Calculator.prototype.add = function(num1, num2){
    let result = num1 + num2;
    this.operations.push(`added ${num1} to ${num2} got ${result}`);
    return result;
}

Calculator.prototype.multiply = function(num1, num2){
    let result = num1 * num2;
    this.operations.push(`multiplied ${num1} with ${num2} got ${result}`);
    return result;
}

Calculator.prototype.subtract = function(num1, num2){
    let result = num1 - num2;
    this.operations.push(`subtracted ${num1} from ${num2} got ${result}`);
    return result;
}

Calculator.prototype.divide = function(num1, num2){
    let result = num1 / num2;
    this.operations.push(`divided ${num1} by ${num2} got ${result}`);
    return result;
}

Calculator.prototype.printOperations = function(){
    this.operations.forEach(element => {
        console.log(element);
    });
}

Calculator.prototype.clearOperations = function(){
    this.operations = [];
}

let calc = new Calculator();
calc.add(5,2);
calc.divide(4,6);
calc.multiply(8,7);
calc.divide(8,4);
calc.printOperations();
calc.clearOperations();
calc.printOperations();