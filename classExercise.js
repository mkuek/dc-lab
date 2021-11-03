// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

// const reversed = (str) => {
//   const result = [];
//   result.push(str.reverse());
//   console.log(result);
// };

// reversed(["hello", "goodbye"]);

// const reversed2 = (str) => {
//   let newString = "";
//   for (let i = str.length - 1; i > -1; i--) {
//     newString += str[i];
//     //newString.push(str[i]);
//   }
//   console.log(newString);
// };
// reversed2("9876");

// const reverse = (str) => {
//   let splitString = str.split("");
//   //console.log(splitString);
//   let reversedString = splitString.reverse();
//   //onsole.log(reversedString);
//   let finalString = reversedString.join("");
//   console.log(finalString);
// };
// reverse("9876");

// const factor = (num) => {
//   for (let i = num - 1; i > 0; i--) {
//     num *= i;
//   }
//   console.log(num);
// };
// factor(8);

// const longestWord = (arr) => {
//   let wordCount = arr.split(" ");
//   //   console.log(wordCount);
//   let max = 0;
//   for (let i = 0; i < wordCount.length; i++) {
//     if (wordCount[i].length > max) {
//       max = wordCount[i].length;
//     }
//   }
//   console.log(max);
// };

// longestWord("my name is michael");

const fillingArray = (arr) => {
  let newArray = [];
  let itterations = arr - 1;
  for (let i = 0; i < arr; i++) {
    newArray.push(i);
  }
  console.log(newArray);
};
fillingArray(10);
