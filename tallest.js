
function findTallestHeight(array) {
       let max = array[0];

  for (const num of array) {
    if (num > max) {
      max = num;
    }
  };

  return max;
}

const hights = [56, 65, 68, 72, 78, 60, 79, 89];

const tallest = findTallestHeight(hights);
console.log("tallest:", tallest);
