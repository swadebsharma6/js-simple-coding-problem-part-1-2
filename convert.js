
// Convert inch to feet.

function inchToFeet(inch){
      const feet = inch / 12;
      return feet;
}

const shuvoHeight = 75;
const result = inchToFeet(shuvoHeight);

// console.log(result)


function inchToFeet2(inch){
      const feetFraction = inch / 12;
      const feetNumber = parseInt(feetFraction);
      const remainingInch = inch % 12;
      const result = feetNumber + " Ft " + remainingInch + " Inch";
      return result;
}

const shuvoHeight2 = 75;
const result2 = inchToFeet2(shuvoHeight2);

console.log(result2)