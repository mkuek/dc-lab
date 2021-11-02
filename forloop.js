// Lets check all days of the week using FOR Loop
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
  for (let index = 0; index < DAYS_OF_WEEK.length; index++) {
    let dayOfWeek = DAYS_OF_WEEK[index];
    if (
      myFriendsSchedule[dayOfWeek] == true &&
      myMoneySchedule[dayOfWeek] >= 10
    ) {
      canWeGoToMovie += "On " + dayOfWeek + "? Yes, lets go to the movies!!\n";
    } else if (
      myFriendsSchedule[dayOfWeek] == true ||
      myMoneySchedule[dayOfWeek] >= 10
    ) {
      canWeGoToMovie +=
        "On " + dayOfWeek + "? One of us can go to the movies \n";
    } else {
      canWeGoToMovie += "On " + dayOfWeek + "? We can't go to the movies \n";
    }
  }
  console.log(canWeGoToMovie);
  return;
}
canWeGoToTheMovies();
// create a variable called whatDaysCanWeGoToTheMovies that is an empty string. i.e. there is nothing inside the open and close quotes
// output/print the days of the week we are checking. What would we use to do that?
// i.e. We are checking the days of the week: DAYS_OF_WEEK
// Create a for loop using the length of DAYS_OF_WEEK as the condition
// create a variable called dayOfWeek that will have the day of week as we iterate over the array
// create an if statement for myFriendsSchedule and myMoneySchedule.
// Using bracket notation lookup the day of the week for both objects, find out if my friend is free AND I have the money
// If they have the time AND I have the money then we can go! Add that to the whatDaysCanWeGoToTheMovies string
// ex. "On " + theDateWeWantToGo + "? Yes, lets go to the movies!!"
// Create an else/if statement to check if my friend has the time OR if I have the money
// If they have the time OR I have the money then we can go!  Add that to the whatDaysCanWeGoToTheMovies string
// ex. "On " + theDateWeWantToGo + "? One of us can go to the movies"
// Create an else statement
// if NEITHER they have the time AND I don't have the money then we can not go :(
// ex: "On " + theDateWeWantToGo + "? We can't go to the movies"
// output/print the variable whatDaysCanWeGoToTheMovies
// exit the function
// call the function
