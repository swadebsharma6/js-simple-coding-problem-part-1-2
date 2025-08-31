function getMinNumber (array){
      let min = array[0];

      for(const number of array){
            if(number < min){
                  min = number;
                  
            }
      };
      return min;
};


const numbers = [22, 34, 54, 56, 76, 78, 88, 11, 7];

const minNumber = getMinNumber(numbers);
console.log('min number', minNumber);