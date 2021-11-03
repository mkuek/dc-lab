// Lets check what day we can go to the Movies using WHILE Loop
// Use the same variables from the other exercise
let myFriendsSchedule = {
  sunday: false,
  monday: true,
  tuesday: false,
  wednesday: true,
  thursday: false,
  friday: true,
  saturday: false,
};
// Create an object called myMoneySchedule that has how much money I have during the week the key/value pair should be day_of_week and a number value i.e. { sunday: 10 }
let myMoneySchedule = {
  sunday: 10,
  monday: 5,
  tuesday: 12,
  wednesday: 30,
  thursday: 12,
  friday: 75,
  saturday: 0,
};
// create a new variable called DAYS_OF_WEEK that is a string array of all the days of the week i.e. ["sunday"]
const DAYS_OF_WEEK = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
// create a function called canWeGoToTheMovies that has not parameters
function canWeGoToTheMovies() {
  let canWeGoToMovie = "";
  let index = 0;
  let dayOfWeek = DAYS_OF_WEEK[index];
  while (canWeGoToMovie === "" || index < DAYS_OF_WEEK.length) {
    if (
      myFriendsSchedule[dayOfWeek] == true &&
      myMoneySchedule[dayOfWeek] >= 10
    ) {
      canWeGoToMovie = "On " + dayOfWeek + "? Yes, lets go to the movies!!\n";
    }
    index++;
    dayOfWeek = DAYS_OF_WEEK[index];
  }
  console.log(canWeGoToMovie);
  return;
}
canWeGoToTheMovies(); // create a variable called whatDaysCanWeGoToTheMovies that is an empty string. i.e. there is nothing inside the open and close quotes
// create an index variable with a value of 0
// create a variable called dayOfWeek that will have the day of week as we iterate over the array
// output/print the days of the week we are checking. What would we use to do that?
// i.e. We are checking the days of the week: DAYS_OF_WEEK
// Create a while loop, add your conditional inside the parentheses
// create an if statement for myFriendsSchedule and myMoneySchedule.
// Using bracket notation lookup the day of the week for both objects, find out if my friend is free AND I have the money
// If they have the time AND I have the money then we can go! Add that to the whatDaysCanWeGoToTheMovies string
// ex. "On " + theDateWeWantToGo + "? Yes, lets go to the movies!!"
// change the value of index by adding 1
// reassign the dayOfWeek based on the index
// output/print the variable whatDaysCanWeGoToTheMovies
// exit the function
// call the function
