// // Task - 1
// let arr = "world";

// function ReverseFunction(arg) {
//   return arr.split("").reverse().join("");
// }

// console.log(ReverseFunction(arr));



// Task - 3
let arr = ["olma"];

function palindromFunction(arg) {
    let reverseWord = arr.reverse();
    
    if (arr == reverseWord) {
        return "Palindrom so'z"
    }else{
        return "Palindrom so'z emas"
    }
}

console.log(palindromFunction(arr));