// var var1 = var2
// var var2 = var3
// var var3 = var1 

// var num = 5
// console.log(num)

// var num = 7
// console.log(num)


// var x = 5
// var y = 8

// console.log(2* (x+y))
// var x = 30
// console.log(x/ 10 + x)

// var x = 4
// var n = 8
// console.log(x ** n)

// var a = 15
// var x = a + 10
// var y = a - 10
// var z = a % 10
// var result = a / (x * y * z)
// console.log(result)

// var right_operand = 10
// var left_operand = 15
// var operator ="+";
// var ans



// if(operator == "+") {
//     ans = left_operand + right_operand
// }
// else if(operator == "-"){
//      ans = left_operand - right_operand
// }
// else if (operator == "*"){
//      ans = left_operand * right_operand
// }
// else if(operator == "/"){
//      ans = left_operand / right_operand 

// } else ans = NaN
// console.log(ans)


// const calc = function(x) {
//     function secondNumber(a){
//         return a * x;
//     }
//     return secondNumber;
// }
// console.log(calc(3)(2));

// function higherOrderFunction(lowerFunction){
//     console.log("higher function")
//     lowerFunction();
// }

// higherorderfunction(function lowerOrderFunction){
//     console.log("lower function")
// };

function greetings(greet){
    return function person(name){
        return `Hello, ${name}. ${greet}`;
        }  
}
console.log(greetings("Good morning")("John"))
