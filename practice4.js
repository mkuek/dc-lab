function makeANumber() {
  let mynum = 4;
  console.log(mynum);
}

function makeAnInteger() {
  let myInt = 15;
  console.log(myInt);
}
function makeAFloat() {
  let myFloat = 15.1425;
  console.log(myFloat);
}
function makeZero() {
  let zilch = 0;
  console.log(zilch);
}
function makeAnInteger() {
  let myInt = 15;
  console.log(myInt);
}
function abstractLength() {
  const tarPitAbstract =
    "Complexity is the single major difficulty in the successful development of large-scale software systems. " +
    "Following Brooks we distinguish accidental from essential difficulty, but disagree with his premise that most complexity remaining in contemporary systems is essential. " +
    "We identify common causes of complexity and discuss general approaches which can be taken to eliminate them where they are accidental in nature. " +
    "To make things more concrete we then give an outline for a potential complexity-minimizing approach based on functional programming and Codd’s relational model of data.";
  console.log(tarPitAbstract.length);
}

let n = 6;
let conversation = "";
while (n > 0) {
  if (n % 2 !== 0) {
    conversation += "one for me. ";
    if (n === 1) {
      conversation += "none for you.";
    }
  } else {
    conversation += "one for you";
    if (n === 1) {
      conversation += "none for me.";
    }
  }

  n--;
}
//console.log(conversation);
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = nums[0];
for (let i = 1; i < nums.length; i++) {
  result = result + nums[i];
}
console.log(result);
