// // Task - 1
// let arr = "world";

// function ReverseFunction(arg) {
//   return arr.split("").reverse().join("");
// }

// console.log(ReverseFunction(arr));






let str = 'hello world';
let vowels =["a", "e", "i", "o", "u"];

function vowelsFunction(arg1, arg2) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        let letters = str[i].split("");
        for(let i = 0; i < letters; i++){
            for(let i = 0; i < vowels.length; i++){
                if (letters[i] === vowels[i]) {
                    counter+1;
                  }
                }
            }
            }
        
  
    return counter;
  }
  
  console.log(vowelsFunction(str,vowels));

  

// // Task - 3
// let arr = ["kiyik"];

// function palindromFunction(arg) {
//     let arr1 = arr.split("")
//     let arr2 = arr1.reverse()
//     let arr3 = arr2.join("")
//     if (arr == arr3) {
//         return "Palindrom so'z"
//     }else{
//         return "Palindrom so'z emas"
//     }
// }

// console.log(palindromFunction(arr));
