// USER INTERFACE
$(document).ready(function() {
  $("form#learnPigLatin").submit(function(event) {
    event.preventDefault();
    var translate = $("input#translate").val();
    var translateSplit = translate.split("");
    console.log(translateSplit);
});
});

// console.log(Array.from(translate));
// expected output: Array ["f", "o", "o"]
//
// console.log(Array.from([1, 2, 3], x => x + x));
// // expected output: Array [2, 4, 6]


// Business logic
// function isVowelRegEx(char) {
//   if (char.length == 1) {
//     return /[aeiou]/.test(char);
//   }
// }
//
// function isConsonantRegEx(char) {
//   if (char.length == 1) {
//     return /[bcdfghjklmnpqrttvwxyz]/.test(char);
// };

//     var result = leapYear(year);
//     $(".year").text(year);
//     if (!result) {
//        $(".not").text("not");
//      } else {
//        $(".not").text("");
//      }
//      $("#result").show();
//      // same as writing if ( result === false )
// });
// });
// // BUSINESS logic
// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//       return true
//     } else {
//       return false
