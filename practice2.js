// Follow the instructions below. As you go through the process console log each variable to see it change!
// 1. Create a new Object representing YOU. Include they following keys: fullName, age, faveColor, and likesPizza.
let myObj = {
  fullName: "Michael Kuek",
  age: 30,
  faveColor: "blue",
  likesPizza: true,
};
// HINT: likesPizza accepts a boolean.
// 2. Create a new variable and set it equal to the faveColor property.
let color = myObj.faveColor;
console.log(color);
// 3. Update your fullName to only be your last name.
myObj.fullName = "Kuek";
console.log(myObj.fullName);
// 4. Delete the likesPizza property.
delete myObj.likesPizza;
console.log(myObj);
// 5. Add a new key that represents your fave food and mirrors the likePizza. The value will represent the fact that you like it :)
myObj["likesPasta"] = true;
console.log(myObj);
// For example, I would like put likesCookies.
