const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
if (date) {
if (isNaN(date.getTime())) {
  throw new CustomError('Unable to determine the time of year!');
} else {
  let mounthNumber = date.getMonth();
  if(mounthNumber == 11 || mounthNumber == 0 || mounthNumber == 1) {  
     return "winter"
  }
  if(mounthNumber == 2 || mounthNumber == 3 || mounthNumber == 4) {   
     return "spring"
  }
  if(mounthNumber == 5 || mounthNumber == 6 || mounthNumber == 7) { 
     return "summer"
  }
  if(mounthNumber == 8 || mounthNumber == 9 || mounthNumber == 10) { 
    return "autumn"
  }
}
} else {
  return "Unable to determine the time of year!";
}
}
