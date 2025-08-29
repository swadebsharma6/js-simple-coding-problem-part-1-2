//  Find out the leap year

function isLeapYear(year){
      if(year % 4 === 0){
            return  true;
      }
      else{
            return false;
      }
}

const result = isLeapYear(2023);
console.log(result);


function leapYear (year){
      if(year % 100 !== 0 && year % 4 === 0){
            return true;
      }
}