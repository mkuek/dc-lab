// function digital_root(n) {
//   let sum = 0;
//   let num = n;
//   while (num > 0) {
//     sum += num % 10;
//     num = num / 10;
//   }
//   console.log(sum);
// }

// digital_root(123);

function digital_root(n) {
  var sNumero = n.toString();
  var sum = 0;

  for (let i = 0; i < sNumero.length; i++) {
    sum += parseInt(sNumero[i]);
  }

  if (sum > 9) {
    return digital_root(sum);
  }
  console.log(sum);
  return sum;
}
digital_root(123221);
