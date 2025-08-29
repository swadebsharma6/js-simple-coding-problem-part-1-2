

function noDuplicate(array){

      const unique = [];

      for(const item of array){
            if(unique.includes(item) === false){
                  unique.push(item);
            }
      }

      return unique;
}


const birianiKhor = ['abul', 'babul', 'cabul', 'babul', 'abul', 'kabul', 'cabul'];

const uniqueArray = noDuplicate(birianiKhor);
console.log(uniqueArray)