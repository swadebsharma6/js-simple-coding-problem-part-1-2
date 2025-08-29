function oddAverage(numbers) {
  let odds = [];

  for (let num of numbers) {
    if (num % 2 !== 0) {
      odds.push(num);
    }
  }
  
  let sum = 0;
  for(num of odds){
      sum = sum + num;
     
  }
   
  const oddLength = odds.length;

  const average = sum  / oddLength;
  return average;
}

const numbers = [42, 13, 48, 65, 58, 81, 91, 88, 11];

const avg = oddAverage(numbers);

console.log('avg :', avg)
