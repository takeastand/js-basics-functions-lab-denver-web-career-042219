function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start * 264 - end * 264);
}

function calculatesFarePrice(start, destination) {
  let rideDistance = distanceTravelledInFeet(start, destination)
  if (rideDistance <= 400) {
    return 0;
  } else if (rideDistance < 2000) {
    return ((rideDistance - 400) * 0.02);
  } else if (rideDistance < 2500){
    return 25;
  } else return "cannot travel that far"
}
//
// function scuberGreetingForFeet(ride){
//   // Write your code here!
//   if (ride > 2500) {
//     return "No can do.";
//   }
//   else if (ride > 2000) {
//     return "I will gladly take your thirty bucks.";
//   }
//   else if (ride <= 400) {
//     return "This one is on me!";
//   }
// }
//
// function ternaryCheckCity(city){
//   // Write your code here!
//   return(city === "NYC" ? "Ok, sounds good." : "No go.");
// }
//
// function switchOnCharmFromTip(tip){
//   // Write your code here!
//   switch (tip) {
//     case "generous":
//       return "Thank you so much.";
//     case "not as generous":
//       return "Thank you.";
//     default:
//       return "Bye.";
//   }
// }
