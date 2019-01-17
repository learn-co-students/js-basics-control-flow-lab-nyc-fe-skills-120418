// Write your code in this file!

//this was og way do not use//

// function scuberGreetingForFeet(someValue){
// let result
// if(someValue <= 400){
//   result = 'This one is on me!';
// } else if(someValue >= 2000){
//   result = 'I will gladly take your thirty bucks.';
// } else if(someValue > 2500){
//   result = 'No can do.';
// } 
// return result
// } 
//

//new way to get test 1 to work//
function scuberGreetingForFeet(someValue){
  let result 
  if(someValue >= 2500){
    result = 'No can do.';
  } else if (someValue <= 400){
    result = 'This one is on me!';
  } else if(someValue >= 2000){
    result = 'I will gladly take your thirty bucks.';
  }
  return result
}

// test 2//
// let NYC=true;
// function ternaryCheckCity() {
//   if(NYC){
//     return 'Ok, sounds good.';
//   } else if(Pittsburgh){
//     return 'No go.';
//   }
//   return result
// }


function ternaryCheckCity(whatCity){
  return whatCity == 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// function ternaryCheckCity(Pittsburgh){
//   return NYC ? 'Ok, sounds good.' : 'No go.'; 
// }
// function ternaryCheckCity(Pittsburgh){
//   return Pittsburgh ? 'Ok, sounds good.' : 'No go.';
// }

// return Pittsburgh ? 'Ok, sounds good.' :'No go.';
// // }


// function ternaryCheckCity(NYC) {
// return (NYC ? "NYC" : "Pittsburgh")
// }


//test 3//
// function switchOnCharmFromTip(){
// }

function switchOnCharmFromTip(tipAmount) {
switch(tipAmount) {
  case 'generous': {
    return 'Thank you so much.'
    break;
  }
  case 'not as generous': {
    return 'Thank you.'
    break;
  }
  case 'thanks for everything': {
    return 'Bye.'
     break;
  }
}
}