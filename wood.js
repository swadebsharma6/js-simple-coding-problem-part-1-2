
/**
 * Chair- 3cft
 * table - 10 cft
 * bed - 50 cft
 * */ 

function woodQuantityCalculator (chair, table, bed){
      const perChairWood = 3;
      const perTableWood = 10;
      const perBedWood = 50;

      const totalChairWood = chair * perChairWood;
      const totalTableWood = table * perTableWood;
      const totalBedWood = bed * perBedWood;

      const totalWood = totalChairWood + totalTableWood + totalBedWood;

      // console.log('totalWood:', totalWood);

      return totalWood;
      
};

const chair = 5;
const table = 2;
const bed = 1;

const totalWood = woodQuantityCalculator(chair, table, bed);
console.log('TotalWood', totalWood)