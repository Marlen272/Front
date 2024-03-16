// //ПУНКТ 1
// var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
//
// var tagCounts = {};
//
//  for (let tag of tags) {
//      if (tagCounts[tag]) {
//          tagCounts[tag]++;
//     } else {
//          tagCounts[tag] = 1;
//      }
// }
//
// console.log(tagCounts)

//ПУНКТ 2
// var firstArray = [1, 2, 3, 45, 32, 56, 61, 23, 12, 2, 34, 5, 6, 3, 76, 67, 87, 76];
// // var secondArray = [1, 45, 32, 3, 4, 2, 56, 76, 67, 87, 89, 8, 56, 54];
// //
// // var commonElements = firstArray.filter(function(element) {
// //     return secondArray.includes(element);
// // });
// //
// // console.log(commonElements);

//ПУНКТ 3
// function averagePositiveNumbers(numbers) {
//     var positiveNumbers = numbers.filter(function(number) {
//         return number > 0;
//     });
//
//     if (positiveNumbers.length === 0) {
//         return 'В массиве нет положительных чисел';
//     }
//
//     var sum = positiveNumbers.reduce(function(total, number) {
//         return total + number;
//     }, 0);
//
//     return sum / positiveNumbers.length;
// }
//
// var numbers = [2, -78, 45, 4, -7, -6, -10, 26, 30, 8];
// console.log(averagePositiveNumbers(numbers));

//ПУНКТ 4
// function wordsWithTA(array) {
//     var result = array.filter(function(word) {
//         return word.toLowerCase().includes('t') && word.toLowerCase().includes('a');
//     });
//     return result;
// }
//
// var words = ['text', 'frontend', 'apple', 'banana', 'Tangerine','Taco','Tank','Taekwondo'];
// console.log(wordsWithTA(words));
