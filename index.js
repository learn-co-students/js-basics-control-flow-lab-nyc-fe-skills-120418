// Write your code in this file!
function scuberGreetingForFeet(aNumber) {
 if(aNumber <= 400){
 return "This one is on me!"
 }else if(aNumber > 2500){
   return "No can do."
 }else if(aNumber > 2000){
   return 'I will gladly take your thirty bucks.'
 }
}

function ternaryCheckCity(destination){
  if (destination == "NYC"){
    return "Ok, sounds good."
  }else { 
    return "No go."
  }
} 

function switchOnCharmFromTip(tip){
  switch(tip){
    case "generous": return "Thank you so much."
    break;
    case "not as generous": return "Thank you."
    break;
    default : return "Bye."
  } 
}

